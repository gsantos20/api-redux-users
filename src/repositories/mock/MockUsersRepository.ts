/* eslint-disable @typescript-eslint/no-explicit-any */

import { MockUser, MockUserNoPass, User } from '@models/User'
import { IUsersRepository } from '@repositories/IUsersRepositories'
import * as fs from 'fs'
import * as path from 'path'

const dbFilePath = path.join(__dirname, '../../database/db.json')

class MockedUsersRepository implements IUsersRepository {
  constructor() {
    this.loadDbData()
  }
  private users: any = { users: [] }

  private async loadDbData() {
    try {
      const rawData = await fs.promises.readFile(dbFilePath, 'utf8')
      this.users = JSON.parse(rawData).users
    } catch (error) {
      throw new Error('Error loading database file')
    }
  }

  private async writeDbFile() {
    try {
      await fs.promises.writeFile(
        dbFilePath,
        JSON.stringify(
          {
            users: this.users
          },
          null,
          2
        ),
        'utf8'
      )
    } catch (error) {
      throw new Error('Error saving database file')
    }
  }

  async getUsers(params: Partial<MockUser>) {
    return new Promise<User[]>((resolve) => {
      const filteredUsers = this.users.filter((user) => {
        return Object.keys(params).every((key) => {
          const value = user[key as keyof MockUserNoPass]
          const paramValue = params[key]

          if (typeof value === 'string' && typeof paramValue === 'string') {
            return value.includes(paramValue)
          }

          return value === paramValue
        })
      })

      resolve(filteredUsers)
      this.writeDbFile()
    })
  }

  async createUser(user: MockUser) {
    return new Promise<User>((resolve) => {
      const newUser = { id: this.users.length + 1, ...user }
      this.users.push(newUser)
      resolve(newUser)
      this.writeDbFile()
    })
  }

  async findUser(params: any) {
    return new Promise<User | null>((resolve) => {
      resolve(
        this.users.find((user) =>
          Object.keys(params).every(
            (key) => user[key as keyof MockUserNoPass] === params[key]
          )
        ) || null
      )
      this.writeDbFile()
    })
  }

  async findUserById(id: number) {
    return new Promise<User | null>((resolve) => {
      resolve(this.users.find((user) => user.id === id) || null)
      this.writeDbFile()
    })
  }

  async updateUser(id: number, params: MockUserNoPass) {
    return new Promise<User | null>((resolve) => {
      const index = this.users.findIndex((user) => user.id === id)
      if (index !== -1) {
        this.users[index] = { ...this.users[index], ...params }
        resolve(this.users[index])
      } else {
        resolve(null)
      }
      this.writeDbFile()
    })
  }

  async deleteUser(id: number): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const initialLength = this.users.length
      this.users = this.users.filter((user) => user.id !== id)
      resolve(this.users.length < initialLength)
      this.writeDbFile()
    })
  }
}

export { MockedUsersRepository }

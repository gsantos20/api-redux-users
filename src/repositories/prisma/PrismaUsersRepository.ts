/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  CreatePrismaUser,
  IUsersRepository,
  PrismaUser
} from '../IUsersRepositories'
import { prisma } from '../../database/prisma'

class PrismaUsersRepository implements IUsersRepository {
  async getUsers(params: Partial<PrismaUser>) {
    const users = await prisma.user.findMany({
      where: { ...params }
    })

    return users
  }

  async createUser({ username, email, firstName, lastName }: PrismaUser) {
    const user = await prisma.user.create({
      data: {
        username,
        email,
        firstName,
        lastName
      }
    })

    return user
  }

  async findUser(params: any) {
    const user = await prisma.user.findUnique({
      where: { ...params }
    })

    return user
  }

  async findUserById(id: number) {
    const user = await prisma.user.findUnique({
      where: { id: id }
    })

    return user
  }

  async updateUser(id: number, params: CreatePrismaUser) {
    const user = await prisma.user.update({
      where: { id: id },
      data: {
        ...params
      }
    })

    return user
  }

  async deleteUser(id: number) {
    const user = await prisma.user.delete({
      where: { id: id }
    })

    return !!user
  }
}

export { PrismaUsersRepository }

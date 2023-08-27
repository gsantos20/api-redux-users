export interface User {
  id: number
  username: string
  email: string
  password: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export type MockUser = Omit<User, 'id'>
export type MockUserNoPass = Omit<MockUser, 'password'>

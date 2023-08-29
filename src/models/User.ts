export interface User {
  id: number
  username: string
  email: string
  firstName: string
  lastName: string
  createdAt: Date
  updatedAt: Date
}

export type MockUser = Omit<User, 'id'>

import { methodNotAllowed } from '@middlewares/methodNotAllowed'
import express, { Router } from 'express'
import { CreateUserController } from '@controllers/CreateUserController'
import { CreateUserService } from '@services/CreateUserService'
import { DeleteUserService } from '@services/DeleteUserService'
import { DeleteUserController } from '@controllers/DeleteUserController'
import { GetUsersService } from '@services/GetUsersService'
import { GetUsersController } from '@controllers/GetUsersController'
import { PrismaUsersRepository } from '@repositories/prisma/PrismaUsersRepository'
import { UpdateUserService } from '@services/UpdateUserService'
import { UpdateUserController } from '@controllers/UpdateUserController'
import { MockedUsersRepository } from '@repositories/mock/MockUsersRepository'
import '../config/config'

const userRoutes: Router = express.Router()

require('express-async-errors')

const usersRepository =
  process.env.DB_TYPE === 'prisma'
    ? new PrismaUsersRepository()
    : new MockedUsersRepository()

userRoutes.get('/users', async (req, res) => {
  const getUsersService = new GetUsersService(usersRepository)
  const getUsersController = new GetUsersController(getUsersService)

  getUsersController.handle(req, res)
})

userRoutes.post('/user', async (req, res) => {
  const createUserService = new CreateUserService(usersRepository)
  const createUserController = new CreateUserController(createUserService)

  return createUserController.handle(req, res)
})

userRoutes.put('/user/:id', async (req, res) => {
  const updateUserService = new UpdateUserService(usersRepository)
  const updateUserController = new UpdateUserController(updateUserService)

  return updateUserController.handle(req, res)
})

userRoutes.delete('/user/:id', async (req, res) => {
  const deleteUserService = new DeleteUserService(usersRepository)
  const deleteUserController = new DeleteUserController(deleteUserService)

  return deleteUserController.handle(req, res)
})

userRoutes.all('/users', methodNotAllowed)

userRoutes.all('/user', methodNotAllowed)

export default userRoutes

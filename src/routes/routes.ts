/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { Router } from 'express'
import userRoutes from './user'

const routes: Router = express.Router()

routes.use('/', userRoutes)

export default routes

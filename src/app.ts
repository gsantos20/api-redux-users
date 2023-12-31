/* eslint-disable @typescript-eslint/no-unused-vars */
import express, { NextFunction, Request, Response } from 'express'
import cors, { CorsOptions } from 'cors'
import routes from './routes/routes'
import bodyParserErrorHandler from 'express-body-parser-error-handler'
import { queryParser } from 'express-query-parser'
import './config/config'

const app = express()

async function main() {
  const corOptions: CorsOptions = {
    origin: '*'
  }

  app.use(cors(corOptions))
  app.use(express.json())
  app.use(bodyParserErrorHandler())

  app.use(
    queryParser({
      parseNull: true,
      parseUndefined: true,
      parseBoolean: true,
      parseNumber: true
    })
  )

  app.use('/api/', routes)

  app.use((req, res) => {
    if (req.path === '/') {
      return res.redirect('/api/')
    }

    res.status(404).json({
      success: false,
      data: 'Page not found'
    })
  })

  routes.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof Error) {
      return res.status(400).json({
        success: false,
        data: err.message
      })
    }
    res.status(500).json({
      success: false,
      data: `Internal server error - ${err}`
    })
  })
}

main()

export { app }

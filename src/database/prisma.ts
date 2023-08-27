/* eslint-disable @typescript-eslint/no-var-requires */
import '../config/config'

let prisma

if (process.env.DB_TYPE === 'prisma') {
  import('@prisma/client')
    .then((prismaModule) => {
      prisma = new prismaModule.PrismaClient({
        errorFormat: 'minimal'
      })
    })
    .catch((error) => {
      console.error('Error importing Prisma client:', error)
    })
}

export { prisma }

import {
  CreatePrismaUser,
  IUsersRepository
} from '@repositories/IUsersRepositories'
import { User } from '@models/User'

export class UpdateUserService {
  constructor(private readonly userRepository: IUsersRepository) {}
  async execute(id: string, params: CreatePrismaUser): Promise<User | Error> {
    const existsUser = await this.userRepository.findUserById(parseInt(id))

    if (!existsUser) {
      throw new Error('Usuário não existe')
    }

    if (params.email) {
      const usedEmail = await this.userRepository.findUser({
        email: params.email
      })

      if (usedEmail && usedEmail.id.toString() !== id) {
        throw new Error('Email de usuário está em uso')
      }
    }

    const user = await this.userRepository.updateUser(parseInt(id), params)

    if (!user) {
      throw new Error('Usuário não atualizado')
    }

    return user
  }
}

import { IUsersRepository, PrismaUser } from '@repositories/IUsersRepositories'
import { User } from '@models/User'

export class CreateUserService {
  constructor(private readonly userRepository: IUsersRepository) {}
  async execute({
    username,
    email,
    firstName,
    lastName
  }: PrismaUser): Promise<User | Error> {
    const existUserEmail = await this.userRepository.findUser({ email: email })
    const existUserName = await this.userRepository.findUser({
      username: username
    })

    if (existUserEmail || existUserName) {
      throw new Error('Usuário já existente!')
    }

    const user = await this.userRepository.createUser({
      username,
      email,
      firstName,
      lastName
    })

    if (!user) {
      throw new Error('Usuário não foi criado')
    }

    return user
  }
}

/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { UpdateUserService } from '@services/UpdateUserService'
import { Request, Response } from 'express'

export class UpdateUserController {
  constructor(private updateUserService: UpdateUserService) {}

  async handle(request: Request, response: Response) {
    const body = request?.body

    if (!body) {
      throw new Error('Não existe campos para atualização')
    }

    const { username, email, firstName, lastName } = body
    const id = request?.params?.id

    if (!id) {
      throw new Error('Id do usuário é obrigatório')
    }

    const result = await this.updateUserService.execute(id, {
      username,
      email,
      firstName,
      lastName
    })

    return response.json({ success: true, data: result })
  }
}

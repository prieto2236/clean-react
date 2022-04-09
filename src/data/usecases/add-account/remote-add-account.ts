import { EmailInUseErrorError } from '@/domain/errors/EmailInUseError'
import { HttpStatusCode } from '@/data/protocols/http'
import { HttpPostClient } from './../../protocols/http/http-post-client'
import { AccountModel } from '@/domain/models'
import { AddAccount, AddAccountParams } from '@/domain/usecases'

export class RemoteAddAccount implements AddAccount {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<AddAccountParams, AccountModel>
  ) { }

  async add (params: AddAccountParams): Promise<AccountModel> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.forbidden: throw new EmailInUseErrorError()
      default: return null
    }
  }
}

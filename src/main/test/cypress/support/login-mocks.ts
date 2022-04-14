import * as Helper from './http-mocks'
import faker from 'faker'

export const mockInvalidCredentialsError = (): void => Helper.mockInvalidCredentialsError(/login/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/login/, 'POST')
export const mockOk = (): void => Helper.mocOk(/login/, 'POST', { accessToken: faker.random.uuid() })
export const mockInvalidData = (): void => Helper.mocOk(/login/, 'POST')

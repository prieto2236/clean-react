import * as Helper from './http-mocks'
import faker from 'faker'

export const mockEmailInUseError = (): void => Helper.mockEmailInUseError(/signup/)
export const mockUnexpectedError = (): void => Helper.mockUnexpectedError(/signup/, 'POST')
export const mockInvalidData = (): void => Helper.mocOk(/signup/, 'POST')
export const mockOk = (): void => Helper.mocOk(/signup/, 'POST', { accessToken: faker.random.uuid() })

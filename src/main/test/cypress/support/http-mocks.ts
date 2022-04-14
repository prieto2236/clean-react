import { Method } from 'axios'
import faker from 'faker'

export const mockInvalidCredentialsError = (url: RegExp): void => {
  cy.intercept(
    'POST',
    url,
    {
      statusCode: 401,
      body: faker.random.words()
    }
  ).as('request')
}

export const mockEmailInUseError = (url: RegExp): void => {
  cy.intercept(
    'POST',
    url,
    {
      statusCode: 403,
      body: faker.random.words()
    }
  ).as('request')
}

export const mockUnexpectedError = (url: RegExp, method: Method): void => {
  cy.intercept(
    method,
    url,
    {
      statusCode: faker.helpers.randomize([400, 404, 500])
    }
  ).as('request')
}

export const mocOk = (url: RegExp, method: Method, response?: any): void => {
  cy.intercept(
    method,
    url,
    {
      statusCode: 200,
      body: response
    }
  ).as('request')
}

import faker from 'faker'
import * as FormHelper from '../support/form-helper'

describe('', () => {
  beforeEach(() => {
    cy.visit('signup')
  })
  it('Shoud load with correct initial state', () => {
    cy.getByTestId('name').should('have.attr', 'readonly')
    FormHelper.testInputStatus('name', 'Campo obrigatório')

    cy.getByTestId('email').should('have.attr', 'readonly')
    FormHelper.testInputStatus('email', 'Campo obrigatório')

    cy.getByTestId('password').should('have.attr', 'readonly')
    FormHelper.testInputStatus('password', 'Campo obrigatório')

    cy.getByTestId('passwordConfirmation').should('have.attr', 'readonly')
    FormHelper.testInputStatus('passwordConfirmation', 'Campo obrigatório')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })

  it('Shoud present error state if form is invalid', () => {
    cy.getByTestId('name').focus().type(faker.random.alphaNumeric(3))
    FormHelper.testInputStatus('name', 'Valor inválido')

    cy.getByTestId('email').focus().type(faker.random.word())
    FormHelper.testInputStatus('email', 'Valor inválido')

    cy.getByTestId('password').focus().type(faker.random.alphaNumeric(3))
    FormHelper.testInputStatus('password', 'Valor inválido')

    cy.getByTestId('passwordConfirmation').focus().type(faker.random.alphaNumeric(5))
    FormHelper.testInputStatus('passwordConfirmation', 'Valor inválido')

    cy.getByTestId('submit').should('have.attr', 'disabled')
    cy.getByTestId('error-wrap').should('not.have.descendants')
  })
})

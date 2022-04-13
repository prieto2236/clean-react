describe('', () => {
  beforeEach(() => {
    cy.visit('login')
  })
  it('Shoud load with correct initial state', () => {
    cy.getByTestId('email-status').should('have.attr', 'title', 'Campo obrigatório')
  })
})

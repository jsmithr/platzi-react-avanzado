describe('empty spec', () => {
  it('passes', () => {
    cy.visit('/')
  })

  it('When Select a categroy it is shown pictures', () => {
    cy.visit('/pet/1')
    cy.get('article')
  })

  it('We navigating to home page with click on nav', () => {
    cy.visit('/pet/1')

    cy.get('nav a').first().click()
    cy.url().should('include', '/')
  })
})

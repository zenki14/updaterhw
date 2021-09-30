describe('Updater App UI', () => {
  beforeEach(() => {
    cy.visit('https://app.preprod.updatron.com/n/quick-setup/')
  })

  it('Attempts to Login using valid credentials', () => {
    cy.get('[type="submit"]').as('submit').should('contain', 'Sign In')
    cy.get('[name="email"]').type('sdet4+assessment@updater.com')
    cy.get('[name="password"]').type('a123456')
    cy.get('@submit').click()
    cy.get('[name="tv_internet"]').should('be.visible')
    cy.get('[data-cy=hamburger-menu]').click()
    cy.get('[data-cy=menu-flyout]').should('be.visible').and('contain', 'Sign out').as('signout')
    cy.get('@signout').click()
    cy.get('@submit').should('be.visible')
  })

  it('Attempts to Login using invalid credentials', () => {
    cy.get('[type="submit"]').as('submit').should('contain', 'Sign In')
    cy.get('[name="email"]').type('sdet4+assessment@updater.com')
    cy.get('[name="password"]').type('a12345')
    cy.get('@submit').click()
    cy.get('[name="tv_internet"]').should('not.exist')
    cy.get('.uds-body-1').should('contain', 'Oops!')
  })

  it('Triggers Login error message for invalid format for Email and Password', () => {
    cy.get('[type="submit"]').as('submit').should('contain', 'Sign In')
    cy.get('[name="email"]').type('sdet')
    cy.get('[name="password"]').type('abcd')
    cy.get('@submit').click()
    cy.get('[name="tv_internet"]').should('not.exist')
    cy.get('.uds-input__message').should('be.visible').and('have.length', 2)
  })

  it('Validates Forgot Password Link', () => {
    cy.get('[type="submit"]').as('submit').should('contain', 'Sign In')
    cy.get('.uds-link-2').as('forgotpw').should('be.visible').and('contain', 'I forgot my password').and('have.attr', 'href', '/forgot-password')
  })
})
describe('App', () => {
  beforeEach(() => {
		cy.intercept('GET', 'http://localhost:3001/api/v1/reservations', {fixture: 'example'})
		cy.visit('http://localhost:3000/')
	})
	it('should see all reservations', () => {
		cy.get('.reservations-container').should('be.visible')
	})
	it('should show an input form', () => {
		cy.get('form').should('be.visible')
	})
})

	
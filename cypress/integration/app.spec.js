describe('Navigation', () => {
    it('devrait naviguer vers la page discover', () => {
        cy.visit('http://localhost:3000/')

        cy.get('a[href*="discover"]').click()

        cy.url().should('include', '/discover')

        cy.get('h1').contains('Rêver Rouen avec ses habitants')
    })
})
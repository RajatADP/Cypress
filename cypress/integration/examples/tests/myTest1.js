describe('Verification Cypress App', ()=> {
    it('Open Cypress App', ()=> {
        cy.visit('https://example.cypress.io/');
    })

    it('Click on type', ()=> {
        cy.contains('type').click();
    })

    it('Verify type url', ()=> {
        cy.url().should('include', 'commands/actions');
    })

    it('Enter email', ()=> {
        cy.get('#email1')
        .type('fakr@gmail.com')
        .should('have.value', 'fakr@gmail.com');
    })
})
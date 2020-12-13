context('My First Cypress test', ()=> {

    it('Open Url', ()=> {
        cy.visit('https://demoqa.com/');
    });

    it('Open Widget', ()=> {
        cy.get('.category-cards > :nth-child(4) > :nth-child(1)').click();
    });

    it('Count links', ()=> {
        cy.get(':nth-child(4) > .element-list > .menu-list > li').should('have.length', 9);
    });


});
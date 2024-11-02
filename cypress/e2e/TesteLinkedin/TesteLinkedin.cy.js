describe('On Linkedin', () => {

    it('I can login', () => {
        cy.visit('https://linkedin.com');

        cy.get('.nav__button-secondary').click();

        cy.get('#username').type('costinpetronela26@gmail.com');

        cy.get('#password').click();

        cy.get('.btn__primary--large')

    })


})
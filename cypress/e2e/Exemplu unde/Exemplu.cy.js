describe('Exemplu unde' , () => {

       //Test verificare segment din url
    
    // it ('verific daca un URL contine ceva' ,() => {
    //     cy.visit('https://www.digi24.ro/stiri/externe');
    //     cy.url().should('include', '/stiri/')  
    // })


       // Test dilay

    // it ('asteapta 10 secunde' , () =>{
    //     cy.visit('https://www.google.com');
    //     cy.get('#L2AGLb').click();
    //     cy.wait(10000);
    //     cy.get('#APjFqb').type('Au trecut 10 secunde')
               
    // })



        // Testul cu selector din timp atribut

            // it('selectez folosind un atribut', () =>{
            //     cy.visit('https://www.google.com');
            //     cy.get('#L2AGLb').click(); 
            //     cy.get('[alt="Google"]').should('be.visible') 
            // })



         // Testul cu screenshot

                // it('fac un screenshot la pagina' , () =>{
                //     cy.visit('https://www.google.com');
                //     cy.screenshot();  
                // })



               // Testul constanta si verificare continut imput
                // it('verific o valoare din imput', () =>{
                //     cy.visit('https://www.google.com');
                //     cy.get('#L2AGLb').click();
                //     const googleSearch = cy.get('#APjFqb');
                    
                //     googleSearch.type('123');
                //     googleSearch.should('have.value', '123');
                // })


            // Testul verifica existenta unei clasa pe un element selectat
                it('verific o valoare din imput',() => {
                    cy.visit('https://www.libris.ro/');
                    cy.get('#autoCompleteButtonMobile').should('have.class', 'onSearchClick');
                }) 


})
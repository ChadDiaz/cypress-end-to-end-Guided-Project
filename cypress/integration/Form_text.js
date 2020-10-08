describe('test our form inputs', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000')
    })

    it("add texts to inputs and submit forms", ()=> {
        cy.get('[data-cy=name]').type("Emily").should("have.value", "Emily")
        cy.get('[data-cy=email]').type("test@gmail.com").should("have.value", "test@gmail.com")
        cy.get('[data-cy=motivation]').type("I love to help").should("have.value" , "I love to help")
        cy.get('[data-cy=positions]').select("Tabling").should("have.value" , "Tabling")
        cy.get('[data-cy=terms]').check().should("be.checked")
        cy.get('[data-cy=submit]').click()
        cy.get('pre').should('exist')
    })
});

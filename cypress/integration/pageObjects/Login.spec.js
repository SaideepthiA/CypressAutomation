/// <reference types="Cypress" />
describe("Test Project- Nop Commerce",function(){

    beforeEach(()=>{
        cy.visit("https://demo.nopcommerce.com/")
    })
    it("Verify Title of the Page", function(){
        cy.title().should('eq','nopCommerce demo store')
    })

    it("Register",function(){
        cy.get('.ico-register').click()
        cy.title().should('eq','nopCommerce demo store. Register')

        cy.get('#gender-female').check();
        cy.get('#FirstName').clear().type('Deepthi')
        cy.get('#LastName').clear().type('Anivi')
        cy.get('select[name=DateOfBirthDay]').select('19')
        cy.get('select[name=DateOfBirthMonth]').select('June')
        cy.get('select[name=DateOfBirthYear]').select('1995')
        cy.get('#Email').clear().type('d9opu.anivi@gmail.com')
        cy.get('#Password').clear().type('Anivireddi@2022')
        cy.get('#ConfirmPassword').clear().type('Anivireddi@2022')
        cy.get('#register-button').should('be.enabled').click()

        cy.get('div.page-body>div.result').should('have.text','Your registration completed')
        cy.get('div.page-body>div.buttons>a').click()

        cy.get('.ico-account').should('be.visible')
        
    })

    it('Login',function(){

        cy.get('.ico-login').click()
        cy.get('#Email').clear().type('d9opu.anivi@gmail.com')
        cy.get('#Password').clear().type('Anivireddi@2022')
        cy.get('button[type=submit]').contains('Log in').click()
        cy.get('.ico-account').should('be.visible')
    })

    it()

})
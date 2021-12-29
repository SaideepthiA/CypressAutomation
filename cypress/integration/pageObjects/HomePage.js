class HomePage{
navigateToURL(){
    cy.visit("https://demo.nopcommerce.com/");
}

registerNewCustomer(){
    cy.get('.ico-register').click()
}

loginAsCustomer(){
    cy.get('.ico-login').click()
}

searchInStore(){
    cy.get('#small-searchterms').clear().type('Nokia Lumia {enter}')
}

validateRegistrationPage(){
    cy.title().should('eq','nopCommerce demo store. Register')
}

validateLoginPage(){
    cy.title().should('eq','nopCommerce demo store. Login')
}

}
export default HomePage
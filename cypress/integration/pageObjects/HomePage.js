class HomePage{
navigateToURL(){
    cy.visit("https://demo.nopcommerce.com/");
}

registerNewCustomer(){
    //cy.get('.ico-register').click()
    cy.xpath('/html/body/div[6]/div[1]/div[1]/div[2]/div[1]/ul/li[1]/a').click();
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
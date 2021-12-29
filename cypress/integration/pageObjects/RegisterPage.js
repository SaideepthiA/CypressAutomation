class RegisterPage{

    details = {
        genderfemale:()=> cy.get('#gender-female'),
        firstNameInput:()=>cy.get('#FirstName'),
        lastNameInput:()=>cy.get('#LastName'),
        birthdaySelect:()=>cy.get('select[name=DateOfBirthDay]'),
        birthMonthSelect:()=>cy.get('select[name=DateOfBirthMonth]'),
        birthYearSelect:()=>cy.get('select[name=DateOfBirthYear]'),
        emailInput:()=>cy.get('#Email'),
        passwordInput:()=>cy.get('#Password'),
        confirmPasswordInput:()=>cy.get('#ConfirmPassword'),
    }

    messages = {
        firstNameError:()=>cy.get('#FirstName-error'),
        lastNameError:()=>cy.get('#LastName-error'),
        emailError:()=>cy.get('#Email-error'),
        passwordError:()=>cy.get('#Password-error'),
        confirmPasswordError:()=>cy.get('#ConfirmPassword-error'),
        alreadyRegisteredError:()=>cy.get('.message-error>ul>li'),
        successfulMessage:()=>cy.get('div.page-body>div.result'),

    }

    buttons ={
        registerButton:()=> cy.get('#register-button'),
        continueButton:()=> cy.get('div.page-body>div.buttons>a')
    }
    selectGenderfemale(){
        this.details.genderfemale().check();
    }

    enterFirstName(name){
        this.details.firstNameInput().clear().type(name);
    }

    enterLastName(name){
        this.details.lastNameInput().clear().type(name);
    }

    selectDateOfBirth(day,month,year){
        this.details.birthdaySelect().select(day)
        this.details.birthMonthSelect().select(month)
        this.details.birthYearSelect().select(year)
    }

    enterEmail(email){
        this.details.emailInput().clear().type(email)
    }

    enterPassword(password){
        this.details.passwordInput().clear().type(password)
        this.details.confirmPasswordInput().clear().type(password)
    }

    registerButton(){
   this.buttons.registerButton().should('be.enabled').click()
    }

    successfulRegistration(){
        this.messages.successfulMessage().should('have.text','Your registration completed')
        this.buttons.continueButton().click()
        cy.get('.ico-account').should('be.visible')
    }

    alreadyRegistered(){
        this.messages.alreadyRegisteredError().should('have.text','The specified email already exists')
    }

    
}
module.exports = new RegisterPage();
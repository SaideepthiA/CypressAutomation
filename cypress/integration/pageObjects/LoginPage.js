class LoginPage{

    elements = {
        emailInput:()=> cy.get('#Email'),
        passwordInput:()=>cy.get('#Password'),
        rememberMeCheckbox:()=> cy.get('#RememberMe'),
        forgotPasswordLink:()=> cy.get('.forgot-password'),
        myAccountLink:()=>cy.get('.ico-account')
    }

    button ={ 
        loginButton:()=>cy.get('form>div:nth-child(3)>button').contains('Log in'),
        registerButton:()=>cy.get('.new-wrapper>div:nth-child(3)>button').contains('Register'),
        logoutButton:()=>cy.get('.ico-logout')
    }

    messages ={
        newCustomerError:()=> cy.get('div.message-error>ul>li'),
        loginError:()=> cy.get('div.message-error'),
        emailError:()=>cy.get('#Email-error')

    }
    logout(){
        this.button.logoutButton().click()
    }
    enterEmail(email){
        this.elements.emailInput().clear().type(email)
    }

    enterPassword(password){
        this.elements.passwordInput().clear().type(password)
    }

    rememberMe(){
        this.elements.rememberMeCheckbox().check()
    }

    forgotPassword(){
        this.elements.forgotPasswordLink().click()
    }

    loginButton(){
        this.button.loginButton().click()
    
    }

    registerButton(){
        this.button.registerButton().click()
    }

    validateEmail(email){
        this.elements.emailInput().should('have.value',email)
    }

    validatePassword(password){
        this.elements.passwordInput().should('have.value',password)
    }
    
    validateLoginButton(){
        this.button.loginButton().should('be.enabled')
    }

    successfulLogin(){
        this.elements.myAccountLink().should('be.visible')
    }
    noCustomerFound(){
        this.messages.newCustomerError().should('have.text','No customer account found')
    }
    invalidEmailError(){
        this.messages.emailError().should('have.text','Wrong email')
    }
    mandatoryFieldError(){
        this.messages.emailError().should('have.text','Please enter your email')
    }
}
module.exports= new LoginPage();
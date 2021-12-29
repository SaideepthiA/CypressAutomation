class LoginPage{

    elements = {
        emailInput:()=> cy.get('#Email'),
        passwordInput:()=>cy.get('#Password'),
        rememberMeCheckbox:()=> cy.get('#RememberMe'),
        forgotPasswordLink:()=> cy.get('.forgot-password')
    }

    button ={
        loginButton:()=>cy.get('form>div:nth-child(3)>button').contains('Log in'),
        registerButton:()=>cy.get('.new-wrapper>div:nth-child(3)>button').contains('Register')
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
}
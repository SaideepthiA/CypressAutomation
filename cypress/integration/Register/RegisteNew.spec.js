import HomePage from '../pageObjects/HomePage'
import RegisterPage from '../pageObjects/RegisterPage'

const homepage = new HomePage();
//const registerPage = new RegisterPage();
Given('User Navigate to the website',()=>{

    homepage.navigateToURL()
    //cy.visit("https://demo.nopcommerce.com/")

})

When('User navigate to Register page',()=>{

    homepage.registerNewCustomer()
    //cy.get('.ico-register').click()

})
And('User is successfully navigated to RegisterPage',()=>{

    homepage.validateRegistrationPage()
    //cy.title().should('eq','nopCommerce demo store. Register')

})

And('User enters all the details',()=>{
    RegisterPage.selectGenderfemale()
    RegisterPage.enterFirstName('Saideepthi')
    RegisterPage.enterLastName('Anivireddi')
    RegisterPage.selectDateOfBirth('19','June','1995')
    RegisterPage.enterEmail('abcdedf@gmail.com')
    RegisterPage.enterPassword('Deepu@345')
    

})
And('User Validate all the entered details',()=>{
 
    RegisterPage.details.genderfemale().should('be.checked')
    RegisterPage.details.firstNameInput().should('have.value','Saideepthi')
    RegisterPage.details.lastNameInput().should('have.value','Anivireddi')
    RegisterPage.details.birthdaySelect().should('have.value','19')
    RegisterPage.details.birthMonthSelect().should('have.value','6')
    RegisterPage.details.birthYearSelect().should('have.value','1995')
    RegisterPage.details.emailInput().should('have.value','abcdedf@gmail.com')
    
    
})

When('User click on Register button',()=>{
    RegisterPage.registerButton()
})

Then('Registration is successful',()=>{
    RegisterPage.successfulRegistration()
})

But('User enters already registered email id',()=>{
    RegisterPage.enterEmail('anivireddisaideepthi1995@gmail.com')
})

Then('User must receive already registered Error message',()=>{
    RegisterPage.alreadyRegistered()
})

Then('User must receive Mandatory field Error message',()=>{
    RegisterPage.messages.firstNameError().should('have.text','First name is required.')
    RegisterPage.messages.lastNameError().should('have.text','Last name is required.')
    RegisterPage.messages.emailError().should('have.text','Email is required.')
    RegisterPage.messages.passwordError().should('have.text','Password is required.')
    RegisterPage.messages.confirmPasswordError().should('have.text','Password is required.')
    
})
But ('User enters invalid format of email and password',()=>{
    RegisterPage.enterEmail('abcd')
    RegisterPage.enterPassword('1234')
})

Then('User must be displayed with Format Error message',()=>{
    RegisterPage.messages.emailError().should('have.text','Wrong email')
    RegisterPage.messages.passwordError().should('include.text','must have at least 6 characters')
})

But('User enters wrong confirm password',()=>{
    RegisterPage.details.confirmPasswordInput().type('abcdef')
})

Then('User must be displayed with Invalid confirm password Error message',()=>{
    RegisterPage.messages.confirmPasswordError().should('have.text','The password and confirmation password do not match.')
})
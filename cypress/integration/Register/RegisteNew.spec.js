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

And('User enters all the details',(datatable)=>{
    
    RegisterPage.selectGenderfemale()
    datatable.hashes().forEach(element=>{
    RegisterPage.enterFirstName(element.FirstName)
    RegisterPage.enterLastName(element.LastName)
    RegisterPage.selectDateOfBirth(element.Day,element.Month,element.Year)
    RegisterPage.enterEmail(element.email)
    RegisterPage.enterPassword(element.Password)
    })
    
    

})

When('User click on Register button',()=>{
    RegisterPage.registerButton()
})

Then('Registration is successful',()=>{
    RegisterPage.successfulRegistration()
})

But('User enters already registered email id',(datatable)=>{
    RegisterPage.selectGenderfemale()
    datatable.hashes().forEach(element=>{
    RegisterPage.enterFirstName(element.FirstName)
    RegisterPage.enterLastName(element.LastName)
    RegisterPage.selectDateOfBirth(element.Day,element.Month,element.Year)
    RegisterPage.enterEmail(element.email)
    RegisterPage.enterPassword(element.Password)
    })
})

Then('User must receive already registered Error message',()=>{
    RegisterPage.alreadyRegistered()
})

Then('User must receive Mandatory field Error message',(datatable)=>{
    RegisterPage.messages.firstNameError().should('have.text','First name is required.')
    RegisterPage.messages.lastNameError().should('have.text','Last name is required.')
    RegisterPage.messages.emailError().should('have.text','Email is required.')
    RegisterPage.messages.passwordError().should('have.text','Password is required.')
    RegisterPage.messages.confirmPasswordError().should('have.text','Password is required.')
    
})
But ('User enters invalid format of email and password',(datatable)=>{
    RegisterPage.selectGenderfemale()
    datatable.hashes().forEach(element=>{
    RegisterPage.enterFirstName(element.FirstName)
    RegisterPage.enterLastName(element.LastName)
    RegisterPage.selectDateOfBirth(element.Day,element.Month,element.Year)
    RegisterPage.enterEmail(element.email)
    RegisterPage.enterPassword(element.Password)
    })
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

And('User enters email as {string} and password as {string}',(email,password)=>{
    RegisterPage.enterEmail(email)
    RegisterPage.enterPassword(password)
})
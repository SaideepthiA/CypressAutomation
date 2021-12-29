import HomePage from '../pageObjects/HomePage'
import LoginPage from '../pageObjects/LoginPage';
import RegisterPage from '../pageObjects/RegisterPage';

const homepage = new HomePage();

before(()=>{
    cy.fixture('testData').then((data)=>{
        homepage.navigateToURL()
        homepage.registerNewCustomer()
        RegisterPage.selectGenderfemale()
        RegisterPage.enterFirstName(data.firstName)
        RegisterPage.enterLastName(data.lastName)
        RegisterPage.selectDateOfBirth(data.day,data.month,data.year)
        RegisterPage.enterEmail(data.emailId)
        RegisterPage.enterPassword(data.password)
        RegisterPage.registerButton()
        LoginPage.logout()
    
    })
    
})

Given('User Navigate to the website',()=>{

    homepage.navigateToURL()

})

When('User navigate to Login page',()=>{

    homepage.loginAsCustomer()

})
Then('User is successfully navigated to LoginPage',()=>{

    homepage.validateLoginPage()

})

And( 'User enters email and password',()=>{
    cy.fixture('testData').then((data)=>{
    LoginPage.enterEmail(data.emailId)
    LoginPage.enterPassword(data.password)
    })
})

When('User clicks on Login button',()=>{
    LoginPage.loginButton()
})

Then('Login is successful',()=>{
    LoginPage.successfulLogin()
})
  
And('User enters email id which is not registered',()=>{
    LoginPage.enterEmail('adf@gmail.com')
    LoginPage.enterPassword('Deepu@345')
})
Then('Login must be unsuccessfull',()=>{
    LoginPage.noCustomerFound()
})

Then('User must receive Mandatory field Error message',()=>{
    LoginPage.mandatoryFieldError()
})

But('User enters invalid email id',()=>{
    LoginPage.enterEmail('abcd')
})

Then('User must be displayed with Email Error message',()=>{
    LoginPage.invalidEmailError()
})

When('User enters email as {string} and password as {string}',(email,password)=>{
    LoginPage.enterEmail(email)
    LoginPage.enterPassword(password)
})
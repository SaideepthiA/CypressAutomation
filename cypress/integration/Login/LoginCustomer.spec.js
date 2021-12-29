import HomePage from '../pageObjects/HomePage'

const homepage = new HomePage();
Given('User Navigate to the website',()=>{

    homepage.navigateToURL()

})

When('User navigate to Login page',()=>{

    homepage.loginAsCustomer()

})
Then('User is successfully navigated to LoginPage',()=>{

    homepage.validateLoginPage()

})
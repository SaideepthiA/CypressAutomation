import APIPage from '../pageObjects/API_Automation';
Given('Trigger Get call',()=>{

   APIPage.getUsers();
    
})
Then('users are fetched',()=>{
cy.log("Users are fetched");
    APIPage.verifyGetResponse()

})
Given ('Trigger POST call',()=>{

    APIPage.registerPostCall();
})

Then('user is registered',()=>{
   cy.log("User is registereds");
   APIPage.verifyUserRegistered()
})

Given ('Trigger PUT call',()=>{
    APIPage.putcall();
})

Then('user details are edited',()=>{
    cy.log("User details are edited")
    APIPage.verifyDetailsEdited()
})

Given('Trigger Delete call',()=>{
    APIPage.deleteCall();
})

Then('user details are deleted',()=>{
    cy.log("User details are deleted")
    APIPage.verifyDeletedUser()
})
Given('Trigger POST Call with no inputs',()=>{
    APIPage.noInputs()
})

Then('Verify the error message',()=>{
    APIPage.verifyNoInputError()
})
Given('Trigger POST call with already used mail id',()=>{
    APIPage.alreadyRegisteredEmail()
})

Then('verify email error message',()=>{
    APIPage.verifyEmailError()

})
Given('Trigger POST call with missing parameters',()=>{

    APIPage.missingParams()
})

Then('verify the missing parameters error message',()=>{
    APIPage.verifyMissingParamsError()
})

Given('Trigger GET call with invalid inputs',()=>{
    APIPage.invalidInputs()
})

Then('Verify the invalid error message',()=>{
    APIPage.verifyInvalidErrorMessage()
})

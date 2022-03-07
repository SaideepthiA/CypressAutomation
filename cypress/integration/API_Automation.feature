Feature: API Automation


    Automation of API's of the Application

    Scenario: GET API to open the page
    Given Trigger Get call
    Then users are fetched

    Scenario: POST API to register
    Given Trigger POST call
    Then user is registered 

    Scenario: PUT API to edit
    Given Trigger PUT call
    Then user details are edited

    Scenario: DELETE API to delete
    Given Trigger Delete call
    Then user details are deleted

    Scenario: No Input -POST 
    Given Trigger POST Call with no inputs
    Then Verify the error message

    Scenario: Already registered mail - POST 
    Given Trigger POST call with already used mail id
    Then verify email error message

    Scenario: Missing Parameters - POST
    Given Trigger POST call with missing parameters 
    Then verify the missing parameters error message

    Scenario: InvalidInputs - GET 
    Given Trigger GET call with invalid inputs
    Then Verify the invalid error message
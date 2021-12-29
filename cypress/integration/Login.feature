Feature: Customer Login

    Background: User Navigate to login page
        Given User Navigate to the website
        When User navigate to Login page

    @SmokeTesting @RegressionTesting
    Scenario: Customer Login - Page Navigation 
        Then User is successfully navigated to LoginPage

    Scenario: Customer Login - New customer
        And User enters email id which is not registered
        When User clicks on Login button
        Then Login must be unsuccessfull
        
    @SmokeTesting @RegressionTesting
    Scenario: Customer Login - Successful login
        When User enters email and password
        When User clicks on Login button
        Then Login is successful



    Scenario: Customer Login - Mandatory Fields
        When User clicks on Login button
        Then User must receive Mandatory field Error message

    Scenario: Customer Login - Invalid Email Id
        And User enters email and password
        But User enters invalid email id
        When User clicks on Login button
        Then User must be displayed with Email Error message

    Scenario Outline: Multiple customers Login
        And User enters email as "<email>" and password as "<password>"
        When User clicks on Login button
        Then Login is successful
        Examples: 
        |email||password|
        |test123@gmail.com||test@1234|
        |test345@gmail.com||test@6789|

Feature: Register New Customer


    Registering a New Customer

    Scenario: Customer Login - Page Navigation
    Given User Navigate to the website
    When User navigate to Login page 
    Then User is successfully navigated to LoginPage

    Scenario: Customer Login - Details validation
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    And User Validate all the entered details

    Scenario: New Customer Registration - Successful Registration
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    When User click on Register button
    Then Registration is successful

    Scenario: New Customer Registration - Already Registered Customer
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    But User enters already registered email id
    When User click on Register button
    Then Registration must be unsuccessfull

    Scenario: New Customer Registration - Mandatory Fields
    Given User Navigate to the website
    When User navigate to Register page
    And User misses mandatory Fields
    When User click on Register button
    Then User must receive Mandatory field Error message

    Scenario: New Customer Registration - Invalid Email Id
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    But User enters already registered email id
    When User click on Register button
    Then User must be displayed with Email Error message

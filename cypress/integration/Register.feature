Feature: Register New Customer


    Registering a New Customer

    Scenario: New Customer Registration - Page Navigation
    Given User Navigate to the website
    When User navigate to Register page 
    Then User is successfully navigated to RegisterPage

    Scenario: New Customer Registration - Details validation
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    And User Validate all the entered details

    Scenario: New Customer Registration - Mandatory Fields
    Given User Navigate to the website
    When User navigate to Register page
    When User click on Register button
    Then User must receive Mandatory field Error message

    Scenario: New Customer Registration - Format Validation
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    But User enters invalid format of email and password
    When User click on Register button
    Then User must be displayed with Format Error message

    Scenario: New Customer Registration - Password and Confirm Password mismatch
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    But User enters wrong confirm password
    When User click on Register button
    Then User must be displayed with Invalid confirm password Error message

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
    Then User must receive already registered Error message

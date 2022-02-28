Feature: Register New Customer


    Registering a New Customer

    Scenario: New Customer Registration - Page login
    Given User Navigate to the website
    When User navigate to Register page 
    Then Verify the response status and response body


    Scenario: New Customer Registration - Successful Registration
    Given User Navigate to the website
    When User navigate to Register page
    And User enters all the details
    Then Verify the POST request and response

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

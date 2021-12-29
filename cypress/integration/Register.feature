Feature: Register New Customer


    Registering a New Customer

    Background: User Navigate to login page
        Given User Navigate to the website
        When User navigate to Register page

    Scenario: New Customer Registration - Page Navigation
        Then User is successfully navigated to RegisterPage
    
    Scenario: New Customer Registration - Successful Registration
        When User enters all the details
        |FirstName|LastName|Day|Month|Year|email|Password|
        |Saideepthi|Anivireddi|9|11|1995|deepthi1995@gmail.com|abcd@234|
        When User click on Register button
        Then Registration is successful

    Scenario: New Customer Registration - Already Registered Customer
        When User enters already registered email id
        |FirstName|LastName|Day|Month|Year|email|Password|
        |Saideepthi|Anivireddi|9|11|1995|deepthi1995@gmail.com|abcd@234|
        When User click on Register button
        Then User must receive already registered Error message

    Scenario: New Customer Registration - Mandatory Fields
        When User click on Register button
        Then User must receive Mandatory field Error message

    Scenario: New Customer Registration - Format Validation
        When User enters invalid format of email and password
        |FirstName|LastName|Day|Month|Year|email|Password|
        |Saideepthi|Anivireddi|9|11|1995|anivireddisaideepthi1995|abc|
        When User click on Register button
        Then User must be displayed with Format Error message

    Scenario: New Customer Registration - Password and Confirm Password mismatch
        When User enters all the details
        |FirstName|LastName|Day|Month|Year|email|Password|
        |Saideepthi|Anivireddi|9|11|1995|anivireddisaideepthi1995@gmail.com|abcd@234|
        But User enters wrong confirm password
        When User click on Register button
        Then User must be displayed with Invalid confirm password Error message

    Scenario Outline: Multiple Registrations
         When User enters all the details
        |FirstName|LastName|Day|Month|Year|email|Password|
        |Saideepthi|Anivireddi|9|11|1995|anivireddisaideepthi1995@gmail.com|abcd@234|
        And User enters email as '<email>' and password as '<password>'
        When User click on Register button
        Then Registration is successful
        Examples:
        |email||password|
        |test123@gmail.com||test@1234|
        |test345@gmail.com||test@6789|


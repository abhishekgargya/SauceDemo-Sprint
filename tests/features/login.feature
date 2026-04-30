Feature: Login

Scenario: Login with valid credentials
Given navigate to "https://www.saucedemo.com/"

When Enter username as "standard_user"
And Enter password as "secret_sauce"
And Click on submit button

Then Login should be successful "Swag Labs"
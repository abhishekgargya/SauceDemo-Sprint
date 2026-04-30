Feature: Logout

Scenario: Logout from application
    Given navigate to "https://www.saucedemo.com/"
    When Enter username as "standard_user"
    And Enter password as "secret_sauce"
    And Click on submit button
    And Click on menu button
    And Click on logout button
    Then User should be logged out "Swag Labs"
Feature: Login


Scenario Outline: Login with different users
Given navigate to "https://www.saucedemo.com/"

When Enter username as "<username>"
And Enter password as "<password>"
And Click on submit button

Then Login should be successful "<result>"

Examples:
    | username                | password         | result                                                                    |
    | standard_user           | secret_sauce     | Swag Labs                                                                 |
    | locked_out_user         | secret_sauce     | Epic sadface: Sorry, this user has been locked out.                                                                |
    | performance_glitch_user | secret_sauce     | Swag Labs                                                                 |
    | error_user              | secret_sauce     | Swag Labs                                                                 |
    | visual_user             | secret_sauce     | Swag Labs                                                                 | 
    | invalid_user            | secret_sauce     | Epic sadface: Username and password do not match any user in this service |

   
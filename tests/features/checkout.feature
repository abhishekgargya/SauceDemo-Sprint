Feature: Checkout

  Background:
    Given navigate to "https://www.saucedemo.com/"
    When Enter username as "standard_user"
    And Enter password as "secret_sauce"
    And Click on submit button
    And I add "Sauce Labs Backpack" to the cart
    And I click the cart icon

  @checkout
  Scenario Outline: Checkout with multiple data sets
    When I click the checkout button
    And I enter checkout first name "<firstname>"
    And I enter checkout last name "<lastname>"
    And I enter checkout zip code "<zipcode>"
    And I click the continue button
    Then I should see "<expectedResult>"

    Examples:
      | firstname | lastname | zipcode | expectedResult                     |
      | Abhishek  | Gargya   | 110001  | order summary page                 |
      |           | Gargya   | 110001  | Error: First Name is required      |
      | Abhishek  |          | 110001  | Error: Last Name is required       |
      | Abhishek  | Gargya   |         | Error: Postal Code is required     |
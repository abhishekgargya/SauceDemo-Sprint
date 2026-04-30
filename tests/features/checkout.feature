Feature: Checkout

  Background:
    Given I am logged in as "standard_user" with password "secret_sauce"
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
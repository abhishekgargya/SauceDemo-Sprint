Feature: End to End Shopping Journey

  Background:
    Given navigate to "https://www.saucedemo.com/"
    When Enter username as "standard_user"
    And Enter password as "secret_sauce"
    And Click on submit button
    Then Login should be successful "Swag Labs"

  @e2e @inventory
  Scenario Outline: Inventory can be opened and sorted after login
    Given User is logged in as "<username>" with password "<password>"
    When <action>
    Then <expected_outcome>

    Examples:
      | username      | password     | action                  | expected_outcome                                         |
      | standard_user | secret_sauce | Open the Inventory Page | Should see all the products                              |
      | standard_user | secret_sauce | Name - A to Z           | The products should be sorted alphabetically from A to Z |
      | standard_user | secret_sauce | Name - Z to A           | The products should be sorted alphabetically from Z to A |
      | standard_user | secret_sauce | Price - low to high     | The products should be sorted by Price low to high       |
      | standard_user | secret_sauce | Price - high to low     | The products should be sorted by Price high to low       |

  @e2e @cart
  Scenario Outline: Products can be added to the cart and counted correctly
    When I add "<product1>" to the cart
    And I add "<product2>" to the cart
    And I add "<product3>" to the cart
    Then the cart badge should show "<count>"

    Examples:
      | product1               | product2               | product3                | count |
      | Sauce Labs Backpack    |                        |                         | 1     |
      | Sauce Labs Backpack    | Sauce Labs Bike Light  |                         | 2     |
      | Sauce Labs Backpack    | Sauce Labs Bike Light  | Sauce Labs Bolt T-Shirt | 3     |

  @e2e @checkout
  Scenario Outline: Checkout completes or shows validation errors
    When I add "Sauce Labs Backpack" to the cart
    And I click the cart icon
    And I click the checkout button
    And I enter checkout first name "<firstname>"
    And I enter checkout last name "<lastname>"
    And I enter checkout zip code "<zipcode>"
    And I click the continue button
    Then I should see "<expectedResult>"

    Examples:
      | firstname | lastname | zipcode | expectedResult                 |
      | Abhishek  | Gargya   | 110001  | order summary page             |
      |           | Gargya   | 110001  | Error: First Name is required  |
      | Abhishek  |          | 110001  | Error: Last Name is required   |
      | Abhishek  | Gargya   |         | Error: Postal Code is required |

  @e2e @logout
  Scenario: User can log out after checkout flow
    And Click on menu button
    And Click on logout button
    Then User should be logged out "Swag Labs"
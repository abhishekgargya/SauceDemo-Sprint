Feature: Shopping Cart

  @cart
  Scenario Outline: Add products and validate cart count
    Given I am logged in as "<username>" with password "<password>"
    When I add "<product1>" to the cart
    And I add "<product2>" to the cart
    And I add "<product3>" to the cart
    Then the cart badge should show "<count>"

  Examples:
    | username       | password      | product1               | product2                 | product3                 | count |
    | standard_user  | secret_sauce  | Sauce Labs Backpack    |                          |                          | 1     |
    | standard_user  | secret_sauce  | Sauce Labs Backpack    | Sauce Labs Bike Light    |                          | 2     |
    | standard_user  | secret_sauce  | Sauce Labs Backpack    | Sauce Labs Bike Light    | Sauce Labs Bolt T-Shirt  | 3     |
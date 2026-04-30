Feature: Inventory
    Scenario Outline: Inventory page interactions
        Given User is logged in as "<username>" with password "<password>"
        When  <action>
        Then  <expected_outcome>
        Examples:
            | username      | password     | action                  | expected_outcome                                         |
            | standard_user | secret_sauce | Open the Inventory Page | Should see all the products                              |
            | standard_user | secret_sauce | Name - A to Z           | The products should be sorted alphabetically from A to Z |
            | standard_user | secret_sauce | Name - Z to A           | The products should be sorted alphabetically from Z to A |
            | standard_user | secret_sauce | Price - low to high     | The products should be sorted by Price low to high       |
            | standard_user | secret_sauce | Price - high to low     | The products should be sorted by Price high to low       |
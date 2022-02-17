 Scenario: user add two colas
    Given user opens robobar website
    When user adds a cola
    And user adds a cola
    Then total should be "€2.50"

  Scenario: user adds one beer
    Given user opens robobar website
    When user adds a beer
    Then total should be €2.00

  Scenario Outline: user buys several colas
    Given user opens robobar website
    When user adds <n> cola
    Then total should be €<total>
    Examples:
      | n | total |
      | 1 | 1.25  |
      | 2 | 2.50  |
      | 3 | 3.75  |
      | 4 | 5.00  |

  Scenario Outline: user buys several beers
    Given user opens robobar website
    When user adds <n> beers
    Then total should be €<total>
    Examples:
      | n | total |
      | 1 | 2.00  |
      | 2 | 4.00  |

  Scenario Outline: user buys several wines
    Given user opens robobar website
    When user adds <n> wines
    Then total should be €<total>
    Examples:
      | n | total |
      | 1 | 3.00  |
      | 2 | 6.00  |

  Scenario Outline: user buy several drinks
    Given user opens robobar website
    When user adds <cola> cola
    And user adds <beer> beers
    Then total should be €<total>
    Examples:
      | cola | beer | total |
      | 1    | 0    | 1.25  |
      | 0    | 1    | 2.00  |
      | 1    | 1    | 3.25  |

  Scenario Outline: user buy several drinks
    Given user opens robobar website
    When user adds <cola> cola <beer> beer <wine> wine
    Then total should be €<total>
    Examples:
      | cola | beer | wine | total |
      | 1    | 0    | 0    | 1.25  |



  Scenario: user buys several drinks
    Given user opens robobar website
    When user adds a cola and a beer
    Then total should be €3.25

  Scenario: any user buys a cola
    Given user opens robobar website
    When user adds a cola
    And user checks out
    Then robobar confirms order

  Scenario: any user buys a cola
    Given user opens robobar website
    * user adds a cola
    * user checks out
    * robobar confirms order


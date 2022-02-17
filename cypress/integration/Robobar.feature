Feature: Robobar cart

  Scenario: user add one cola
    Given user opens robobar website
    When user adds a cola
    Then total should be "€1.25"

Scenario: user adds one beer
    Given user opens robobar website
    When user adds a beer
    Then total should be "€2.00"

@focus
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
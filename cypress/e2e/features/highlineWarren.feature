Feature: Highline Warren Feature

 
  Scenario: User sees categories on navigating to homepage
    Given the user is on the homepage
    Then verify elements on homepage
    
  Scenario: Perform click on empty search option
    Given the user is on the homepage
    And click on Search option
    Then verify elements on homepage
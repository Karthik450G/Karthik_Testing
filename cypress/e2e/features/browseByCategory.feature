Feature: Highline Warren Feature

 
  Scenario: Verifying that users can browse products by category on the home page
    Given the user is on the homepage
    Then hover on "Browse By Category" option in homepage
    And navigate to Filtration section
    Then verify Filtration page
    
  
Feature: Highline Warren Feature

 
  Scenario: Verifying that users can browse products by category on the home page
    Given the user is on the homepage
    And enter "Laptop" in search box
    Then verify "Laptop" search results
    
    
  
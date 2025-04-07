describe('Highline Warren - Search Product', () => {
  const HOME_PAGE_TITLE = "[title='Home Page']";
  const SEARCH_BOX = "[class*='searchbox-input']";

  it('Verifying that users can browse products by category on the home page', () => {
    cy.visit('https://www.shophighlinewarren.com/');
    cy.get(HOME_PAGE_TITLE).should('be.visible');
    cy.get("body").then(($body) => {
      if ($body.find("button:contains('Close dialog')").length > 0) {
        cy.contains("Close dialog").click({ force: true });
      }
    });
    cy.get(SEARCH_BOX).first().type('Laptop').type('{enter}');
    cy.contains('Search Results: LAPTOP').should('be.visible');
  });
});

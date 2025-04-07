describe('Highline Warren - Categories and Search', () => {
  const HOME_PAGE_TITLE = "[title='Home Page']";
  const BROWSE_BY_CATEGORY = "[title='Browse By Category']";
  const PARTS_LOOK_UP = "[title='Parts Look Up']";
  const ABOUT = "[title='About']";
  const SEARCH_BUTTON = "button[name='search']";

  it('User sees categories on navigating to homepage', () => {
    cy.visit('https://www.shophighlinewarren.com/');
    cy.get(HOME_PAGE_TITLE).should('be.visible');
    cy.get("body").then(($body) => {
      if ($body.find("button:contains('Close dialog')").length > 0) {
        cy.contains("Close dialog").click({ force: true });
      }
    });
    cy.get(BROWSE_BY_CATEGORY).should('be.visible');
    cy.get(PARTS_LOOK_UP).should('be.visible');
    cy.get(ABOUT).should('be.visible');
  });

});

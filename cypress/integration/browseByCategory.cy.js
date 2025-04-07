describe('Highline Warren - Browse By Category', () => {
  const HOME_PAGE_TITLE = "[title='Home Page']";
  const BROWSE_BY_CATEGORY = "[title='Browse By Category']";
  const FILTRATION_LINK = "[data-testing-id='warren-filtration-link']";
  const FILTRATION_PAGE = "[data-testing-id='Filtration_SHW']";

  it('Verifying that users can browse products by category on the home page', () => {
    cy.visit('https://www.shophighlinewarren.com/');
    cy.get(HOME_PAGE_TITLE).should('be.visible');
    cy.get("body").then(($body) => {
      if ($body.find("button:contains('Close dialog')").length > 0) {
        cy.contains("Close dialog").click({ force: true });
      }
    });
    hoverOnElement('Browse By Category');
    cy.get(FILTRATION_LINK).click({ force: true });
    cy.get(FILTRATION_PAGE).should('be.visible');
  });

  function hoverOnElement(optionName) {
    cy.get(`[title='${optionName}']`)
      .trigger('mouseover', { force: true })
      .wait(500);
  }
});

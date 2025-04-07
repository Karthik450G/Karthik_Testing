

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const HOME_PAGE_TITLE = "[title='Home Page']";
const BROWSE_BY_CATEGORY = "[title='Browse By Category']";
const PARTS_LOOK_UP = "[title='Parts Look Up']";
const ABOUT = "[title='About']";
const SEARCH_BUTTON = "button[name='search']";
const FILTRATION_LINK = "[data-testing-id='warren-filtration-link']";
const FILTRATION_PAGE = "[data-testing-id='Filtration_SHW']";
const SEARCH_BOX = "[class*='searchbox-input']";


Given('the user is on the homepage', () => {
  cy.visit('https://www.shophighlinewarren.com/');
  cy.get(HOME_PAGE_TITLE).should('be.visible');
  cy.contains("Close dialog").click({ force: true });
});

Then('verify elements on homepage', () => {
  cy.get(BROWSE_BY_CATEGORY).should('be.visible');
  cy.get(PARTS_LOOK_UP).should('be.visible');
  cy.get(ABOUT).should('be.visible')
});

Given('click on Search option', () => {
  cy.get(SEARCH_BUTTON).first().click;
});

Given('hover on {string} option in homepage', (optionName) => {
  hoverOnElement(optionName)
});

Given('navigate to Filtration section', () => {
  cy.get(FILTRATION_LINK).click({ force: true });
});

Given('verify Filtration page', () => {
  cy.get(FILTRATION_PAGE).should('be.visible');
});

Given('enter {string} in search box', (text) => {
  cy.get(SEARCH_BOX).first().type(text).type('{enter}');
});

When('verify {string} search results', (text) => {
  const uppercaseText = text.toUpperCase();
  cy.contains(`Search Results: ${uppercaseText}`).should('be.visible');
});

function hoverOnElement(optionName) {
  cy.get(`[title='${optionName}']`)
    .trigger('mouseover',{ force: true })   
    .wait(500);
}
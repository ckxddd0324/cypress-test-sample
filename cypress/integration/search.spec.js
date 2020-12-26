import { homePage, searchResultPage } from '../selectors/index';

describe('search docker image process test', () => {
  it('user is able to docker images without signin', () => {
    const testData = 'node';
    cy.visit('https://www.docker.com/');
    cy.get(homePage.getStartedBtn)
      .should('be.visible')
      .and('have.text', 'Get Started');
    cy.get(homePage.searchToggle)
      .should('be.visible')
      .click();
    cy.get(homePage.searchInput)
      .should('be.visible')
      .type(testData)
      .should('have.value', testData)
      .type('{enter}');
    cy.get(searchResultPage.searchInput)
      .should('be.visible')
      .should('have.value', testData);
    cy.get(searchResultPage.searchResultText)
      .should('be.visible')
      .and('have.text', 'Search results');
    cy.get(searchResultPage.imageLink)
      .should('be.exist')
      .and('have.length', 10);
    cy.get(searchResultPage.imageDescription)
      .should('be.exist')
      .and('have.length', 10);
  });
});

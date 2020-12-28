import { homePage, searchResultPage } from '../selectors/index';

/**
 * this is the search docker image process test
 * it does not required the user to be signed in
 * it will type node as the searching images text
 * after the search is completed, it except that
 * there are test results and container displays on the page
 * also, this does not check or validate the search,
 * this should be taken place as API test or unit test to
 * validate the search result
 */
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

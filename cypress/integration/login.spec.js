import { homePage, hubPage } from '../selectors/index';
import { signinHelper } from '../helpers/helpers';

describe('search docker image process test', () => {
  it('user is able to docker images without signin', () => {
    const testData = { username: 'testinghello1225', password: 'merryxmas' };
    cy.visit('https://www.docker.com/');
    cy.get(homePage.signInBtn)
      .should('be.visible')
      .should('have.attr', 'href')
      .and('include', '/sso/start')
      .then(href => {
        const newLink = href.replace('http', 'https');
        cy.visit(newLink);
      });
    signinHelper(testData);
    cy.get(hubPage.headline)
      .should('be.visible')
      .and('include.text', 'Welcome to Docker Hub');
    cy.get(hubPage.usernameDropdown)
      .should('be.visible')
      .and('have.text', testData.username);
  });
});

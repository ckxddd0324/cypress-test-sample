import { homePage, hubPage } from '../selectors/index';
import { signinHelper } from '../helpers/helpers';

/**
 * This is the login test on docker page
 * it will go to the docker home page
 * click the sign button(since cypress does not work with new tab)
 * so the test will grab the href from the sign in button
 * and navigate to the login page
 * On the login page, it checks if the user after see the login form
 * and enter the username and password also check it values
 * then after login, it checks if the user is login by if there is
 * user dropdown with the user name
 */
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

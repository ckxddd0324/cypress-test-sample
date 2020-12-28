import { homePage, signupPage, getStartedPage } from '../selectors/index';
import { fillSignupFormHelper } from '../helpers/helpers';

/**
 * this is the test for the sign in process
 * there is limitation on submitting the form
 * it requires a captcha and for the test we dont have
 * access to the API key for the disabling the captcha
 * so the test is only checking if the user is able to fill
 * the sign up form and try to submit it without the captcha
 * it is expected that the test will fail which we know the user
 * is able to submit it
 */
describe('sign up process test', () => {
  const today = new Date();
  it('user is able to start sign up process from home page and unable to submit form without Captcha verified', () => {
    const testData = {
      username: `testerUsername${today.getTime()}`,
      password: `pa$$word${today.getTime()}`,
      email: `testing_email_${today.getTime()}@gmail.com`,
      checkMoreEmail: true
    };
    cy.visit('https://www.docker.com/');
    cy.get(homePage.getStartedBtn)
      .should('be.visible')
      .and('have.text', 'Get Started')
      .click();
    cy.get(getStartedPage.header)
      .should('be.visible')
      .and('have.text', 'Get Started with Docker');
    cy.get(getStartedPage.signupBtn)
      .scrollIntoView()
      .should('be.visible')
      .should('have.text', 'Signup')
      .should('have.attr', 'href')
      .and('include', 'signup')
      .then(href => {
        cy.visit(href);
      });
    fillSignupFormHelper(testData);
    cy.get(signupPage.errorMsg)
      .should('be.visible')
      .and('have.text', 'reCAPTCHA is required.');
  });
});

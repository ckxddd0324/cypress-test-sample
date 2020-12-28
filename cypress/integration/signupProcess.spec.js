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
  beforeEach(() => {
    cy.reload();
  });

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

  /**
   * check if the user enter the incorrect email and the
   * error message text displays
   */

  it('error is displayed if the user fills the sign up form with an incorrect email', () => {
    const testData = {
      username: `testerUsername${today.getTime()}`,
      password: `pa$$word${today.getTime()}`,
      email: `testing_email_${today.getTime()}`,
      checkMoreEmail: true,
      submitForm: false
    };
    fillSignupFormHelper(testData);
    cy.get(signupPage.invalidEmailMsg)
      .should('be.visible')
      .and('have.text', 'Please enter a valid email address.');
  });

  it('error is displayed if the user fills the sign up form with short username', () => {
    const testData = {
      username: `123`,
      password: `pa$$word${today.getTime()}`,
      email: `testing_email_${today.getTime()}@gmail.com`,
      checkMoreEmail: true,
      submitForm: false
    };
    fillSignupFormHelper(testData);
    cy.get(signupPage.invalidUsernameMsg)
      .should('be.visible')
      .and('have.text', 'Use 4 to 30 letters & digits only.');
  });
});

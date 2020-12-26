import { homePage, signupPage, getStartedPage } from '../selectors/index';
import { fillSignupFormHelper } from '../helpers/helpers';

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

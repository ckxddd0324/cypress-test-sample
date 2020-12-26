import { signupPage, signinPage } from '../selectors/index';

export function fillSignupFormHelper({
  username = `defaultUsername${new Date().getTime()}`,
  password = `pa$$word${today.getTime()}`,
  email = `testing_email_${today.getTime()}@gmail.com`,
  checkMoreEmail = false,
  submitForm = true
}) {
  cy.get(signupPage.usernameInput)
    .type(username)
    .should('have.value', username);
  cy.get(signupPage.emailInput)
    .type(email)
    .should('have.value', email);
  cy.get(signupPage.passwordInput)
    .type(password)
    .should('have.value', password);
  if (checkMoreEmail) {
    cy.get(signupPage.emailOptionCheckbox)
      .check({ force: true })
      .should('be.checked');
  }
  if (submitForm) {
    cy.get(signupPage.submitBtn)
      .should('be.visible')
      .click();
  }
}

export function signinHelper({ username, password }) {
  cy.get(signinPage.usernameInput)
    .type(username)
    .should('have.value', username);
  cy.get(signinPage.passwordInput)
    .type(password)
    .should('have.value', password);
  cy.get(signinPage.submitBtn)
    .should('be.visible')
    .click();
}


const USERNAME = Cypress.env('BP_USERNAME');
const PASSWORD = Cypress.env('BP_PASSWORD');
const DATE = Cypress.env('BP_DATE');

describe('Moniroring', () => {

  it('look for appointments by date', () => {

    cy.visit('/appointment/new/');

    // Provide username and password
    cy
      .get('#email-or-phone')
      .clear()
      .type(USERNAME);
    cy
      .get('#password')
      .clear()
      .type(PASSWORD);
    cy
      .get('button[type=submit]')
      .click();

    // Look for date in "next available" list
    cy
      .get('form ul')
      .should('contain', DATE);

  });

});

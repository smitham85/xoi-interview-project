// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createAUser', () => {
  cy.request({
    method: 'POST',
    url: '/api/createAccount',
    form: true,
    body: {
      name: 'Ashley',
      email: 'smitham85@gmail.com',
      password: 'E25&%56E!',
      title: 'Miss',
      birth_date: '06',
      birth_month: '08',
      birth_year: '1985',
      firstname: 'Ashley',
      lastname: 'Smith',
      company: 'Company',
      address1: '3133 Arrezo Dr',
      address2: 'apt 2',
      country: 'USA',
      zipcode: '93401',
      state: 'CA',
      city: 'San Luis Obispo',
      mobile_number: '760-2243432',
    },
  });
});

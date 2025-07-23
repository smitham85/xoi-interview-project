describe('Login Test', () => {
  it('should login successfully', function () {
    //Arrange
    cy.visit('/');
    cy.createAUser();
    //Act
    cy.visit('/login');
    cy.get('#form > .container > .row > .col-sm-offset-1').within(() => {
      cy.get('[data-qa="login-email"]').type('smitham85@gmail.com');
      cy.get('[data-qa="login-password"]').type('E25&%56E!');
      cy.get('[data-qa="login-button"]').click();
    });
    //Assert
    cy.url().should('not.include', 'login');
    cy.contains('Logged in as Ashley').should('be.visible');
    cy.contains('Logout').click();
    const invalid_email = 'bad@bad.com';
    const invalid_password = 'badsdjhsdbjhsdjh';
    cy.get('#form > .container > .row > .col-sm-offset-1').within(() => {
      cy.get('[data-qa="login-email"]').type(invalid_email);
      cy.get('[data-qa="login-password"]').type(invalid_password);
      cy.get('[data-qa="login-button"]').click();
    });
    cy.contains('Your email or password is incorrect!').should('be.visible');
  });
  it.only('should search products', function () {
    cy.visit('/login');
    cy.get('#form > .container > .row > .col-sm-offset-1').within(() => {
      cy.get('[data-qa="login-email"]').clear();
      cy.get('[data-qa="login-email"]').type('smitham85@gmail.com');
      cy.get('[data-qa="login-password"]').clear();
      cy.get('[data-qa="login-password"]').type('E25&%56E!');
      cy.get('[data-qa="login-button"]').click();
    });
    cy.contains('Logged in as Ashley').should('be.visible');
    cy.contains('Products').click();
    cy.contains('All Products').should('be.visible');
    cy.fixture('products.json').then((products) => {
      cy.get('#search_product').type(products.product1.name);
      cy.get('#submit_search');
      cy.contains(products.product1.name).should('be.visible');
    });
  });
});

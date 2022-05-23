describe('Home', () => {
  it('Displays the Home Page correctly', () => {
    cy.visit('/');
    cy.contains('Reference Architecture');
    cy.contains('Home');
  });
});

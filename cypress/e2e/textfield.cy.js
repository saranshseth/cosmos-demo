// cypress/integration/textfield.spec.js

describe('TextField Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006');
  });

  it('should render the default text field', () => {
    cy.get('[data-cy=DefaultTextField]').should('exist');
  });

  it('should allow text input', () => {
    cy.get('[data-cy=DefaultTextField] input').type('Hello, World!');
    cy.get('[data-cy=DefaultTextField] input').should(
      'have.value',
      'Hello, World!'
    );
  });

  it('should show helper text', () => {
    cy.get('[data-cy=HelperTextField] .helper-text').should(
      'contain.text',
      'Helper text'
    );
  });

  it('should show error message on invalid input', () => {
    cy.get('[data-cy=ValidationTextField] input').type('invalid');
    cy.get('[data-cy=ValidationTextField] .error-text').should(
      'contain.text',
      'Invalid input'
    );
  });

  it('should be disabled', () => {
    cy.get('[data-cy=DisabledTextField] input').should('be.disabled');
  });
});

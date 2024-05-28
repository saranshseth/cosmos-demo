// cypress/integration/button.spec.js

describe('Button Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006'); // Adjust the URL to match your Storybook instance
  });

  it('should render the primary button', () => {
    cy.get('[data-cy=PrimaryButton]').click().should('exist');
  });

  it('should trigger an action on click', () => {
    cy.get('[data-cy=PrimaryButton]').click();
    cy.get('@action').should('have.been.called');
  });

  it('should render the disabled button', () => {
    cy.get('[data-cy=DisabledButton]').should('be.disabled');
  });

  it('should render the rounded button', () => {
    cy.get('[data-cy=RoundedButton]').should(
      'have.class',
      'rounded-full'
    );
  });
});

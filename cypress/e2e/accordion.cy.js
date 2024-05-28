// cypress/integration/accordion.spec.js

describe('Accordion Component', () => {
  beforeEach(() => {
    cy.visit('http://localhost:6006');
  });

  it('should render the accordion and toggle sections', () => {
    cy.get('[data-cy=Accordion]').click().should('exist');
    cy.get('[data-cy=AccordionHeader]').first().click();
    cy.get('[data-cy=AccordionContent]').first().should('be.visible');
  });

  it('should hide content on second click', () => {
    cy.get('[data-cy=AccordionHeader]').first().click().click();
    cy.get('[data-cy=AccordionContent]')
      .first()
      .should('not.be.visible');
  });
});

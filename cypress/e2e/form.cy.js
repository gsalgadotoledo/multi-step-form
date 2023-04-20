describe('Form navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should show the first step by default', () => {
    cy.contains('Step 1');
  });

  it('should navigate to the next step when the Next button is clicked', () => {
    cy.contains('Next').click();
    cy.contains('Step 2');
  });

  it('should navigate to the previous step when the Previous button is clicked', () => {
    cy.contains('Next').click();
    cy.contains('Step 2');
    cy.contains('Previous').click();
    cy.contains('Step 1');
  });

  it('should retain form data when navigating between steps', () => {
    cy.get('input').type('Test Data');
    cy.contains('Next').click();
    cy.contains('Previous').click();
    cy.get('input').should('have.value', 'Test Data');
  });
});

describe('Form submission', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should submit the form and display a confirmation message', () => {
    // Fill in all form fields and navigate through all steps
    // Replace with your actual form fields
    cy.get('input').type('Test Data 1');
    cy.contains('Next').click();
    cy.get('input').type('Test Data 2');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 3');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 4');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 5');
    cy.contains('Next').click();

    // Add a confirmation message in the last step of your form
    cy.contains('Form submitted successfully');
  });

  it('should save form data in the context', () => {
    // Fill in all form fields and navigate through all steps
    // Replace with your actual form fields
    cy.get('input').type('Test Data 1');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 2');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 3');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 4');
    cy.contains('Next').click();

    cy.get('input').type('Test Data 5');
    cy.contains('Next').click();

    // Check if the form data is saved in the context
    // This will depend on how you store the data in the context
    // In this example, we assume that the form data is stored in an object called `formState`
    cy.window()
      .its('ReactApp.formState')
      .should('deep.equal', {
        step1: { field1: 'Test Data 1' },
        step2: { field2: 'Test Data 2' },
        step3: { field3: 'Test Data 3' },
        step4: { field4: 'Test Data 4' },
        step5: { field5: 'Test Data 5' },
      });
  });
});

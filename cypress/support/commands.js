Cypress.Commands.add('fillMandatoryFieldsAndSubmit', (data = {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    text: 'Test.'
}) => {
    cy.get("#firstName").type(data.firstName)
    cy.get("#lastName").type(data.lastName)
    cy.get("#email").type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})
describe("Política de Privacidade", () => {
  it("testa pagina de Política de Privacidade de forma idependente", () => {
    cy.visit('./src/privacy.html')

    cy.contains("h1", "CAC TAT - Política de Privacidade").should('be.visible')
    cy.contains("p", "Talking About Testing").should('be.visible')
    
  });
});

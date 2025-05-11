describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Orsi");
    cy.get("#email").type("lucasorsi@teste.com");
    cy.get("#open-text-area").type("Texto de exemplo na caixa de texto");
    cy.get('button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });
});

describe("Central de Atendimento ao Cliente TAT", () => {
  beforeEach(() => {
    cy.visit("./src/index.html");
  });

  it("verifica o título da aplicação", () => {
    cy.title().should("eq", "Central de Atendimento ao Cliente TAT");
  });

  it("preenche os campos obrigatórios e envia o formulário", () => {
    const longText = Cypress._.repeat("abcdefghijklmenopeqstuvwxyz", 10);

    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Orsi");
    cy.get("#email").type("lucasorsi@teste.com");
    cy.get("#open-text-area").type(longText, { delay: 0 });
    cy.get('button[type="submit"]').click();

    cy.get(".success").should("be.visible");
  });
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Orsi");
    cy.get("#email").type("lucasorsi");
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });
  it("Verifica não digitação de texto no campo 'telefone'", () => {
    cy.get("#phone").type("text").should("have.value", "");
  });

  it("exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário", () => {
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Orsi");
    cy.get("#email").type("lucasorsi@mail.com");
    cy.get("#phone-checkbox").click();
    cy.get('button[type="submit"]').click();

    cy.get(".error").should("be.visible");
  });

  it.only("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
    cy.get("#firstName")
      .type("Lucas")
      .should("have.value", "Lucas")
      .clear()
      .should("have.value", "");
    cy.get("#lastName")
      .type("Orsi")
      .should("have.value", "Orsi")
      .clear()
      .should("have.value", "");
    cy.get("#email")
      .type("lucasorsi@mail.com")
      .should("have.value", "lucasorsi@mail.com")
      .clear()
      .should("have.value", "");
    cy.get("#phone")
      .type("1234567")
      .should("have.value", "1234567")
      .clear()
      .should("have.value", "");
  });
});

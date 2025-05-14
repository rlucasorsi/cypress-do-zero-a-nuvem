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
    cy.contains("button", "Enviar").click();

    cy.get(".success").should("be.visible");
  });
  it("exibe mensagem de erro ao submeter o formulário com um email com formatação inválida", () => {
    cy.get("#firstName").type("Lucas");
    cy.get("#lastName").type("Orsi");
    cy.get("#email").type("lucasorsi");
    cy.contains("button", "Enviar").click();

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
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("preenche e limpa os campos nome, sobrenome, email e telefone", () => {
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

  it("exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios", () => {
    cy.contains("button", "Enviar").click();

    cy.get(".error").should("be.visible");
  });

  it("envia o formuário com sucesso usando um comando customizado", () => {
    const data = {
      firstName: "Lucas",
      lastName: "Orsi",
      email: "lucas.orsi@mail.com",
      text: "Teste",
    };
    cy.fillMandatoryFieldsAndSubmit();

    cy.get(".success").should("be.visible");
  });
  it("seleciona um produto (YouTube) por seu texto", () => {
    cy.get("#product").select("YouTube").should("have.value", "youtube");
  });
  it("seleciona um produto (Mentoria) por seu valor (value)", () => {
    cy.get("#product").select("mentoria").should("have.value", "mentoria");
  });
  it("seleciona um produto (Blog) por seu índice", () => {
    cy.get("#product").select(1).should("have.value", "blog");
  });
  it("marca o tipo de atendimento 'Feedback'", () => {
    cy.get('input[type="radio"][value="feedback"]')
      .check()
      .should("be.checked");
  });
});

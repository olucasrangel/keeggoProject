let produtoValor;

export const ELEMENTS = {
  verificarHomepage: () =>
    cy
      .get(".logo a")
      .should("have.attr", "href", "#/")
      .and("not.have.attr", "target"),

  selecionarCategoria: () => cy.get("#speakersTxt").click(),

  verificarCategoria: () => cy.get(".categoryTitle").should("be.visible"),

  salvarValor: () =>
    cy
      .get(".productPrice")
      .first()
      .invoke("text")
      .then((valor) => {
        produtoValor = valor.trim();
      }),

  selecionarProduto: () =>
    cy.contains("p a", "Bose Soundlink Bluetooth Speaker III").click(),

  verificarDescricao: () => cy.get("#Description").should("be.visible"),

  adicionarAoCarrinho: () =>
    cy.get('button[name="save_to_cart"]').should("be.visible").click(),

  clicarNoCarrinho: () => cy.get("#shoppingCartLink").click(),

  verificarUrl: () => cy.url().should("contains", "/shoppingCart"),

  verificarProduto: () =>
    cy
      .contains("label", "BOSE SOUNDLINK BLUETOOTH SPEAKER III")
      .should("be.visible"),

  compararValor: () =>
    cy
      .get("label")
      .next(".price")
      .invoke("text")
      .then((valorCarrinho) => {
        expect(valorCarrinho.trim()).to.eq(produtoValor);
      }),

  botaoCheckout: () => cy.get("#checkOutButton").click(),

  sumarioNome: () =>
    cy.contains("a h3", "BOSE SOUNDLINK BLUETOOTH SP").should("be.visible"),

  sumarioQtd: () => cy.contains("a label", "QTY: 1").should("be.visible"),

  sumarioCor: () => cy.contains("label span", "BLACK").should("be.visible"),
  
  valorTotal: () => cy.contains("label span", "$269.99").should("be.visible"),

  menuUsuario: () => cy.get("#menuUserLink").click(),
  username: () => cy.get('input[name="username"]').type("keeggotest"),
  senha: () => cy.get('input[name="password"]').type("Keeggo2"),
  botaoLogar: () => cy.get("#sign_in_btn").click(),
  verificarUsuario: () =>
    cy.get("#menuUserLink").should("contain", "keeggotest"),
};

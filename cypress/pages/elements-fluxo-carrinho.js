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
};

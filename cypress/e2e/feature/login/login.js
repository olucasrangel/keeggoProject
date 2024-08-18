import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const element = require('../../../pages/elements-fluxo-carrinho').ELEMENTS;

Given("que estou na página inicial da Advantage Online Shopping", () => {
  cy.visit("/");
  element.verificarHomepage();
});

When("seleciono uma categoria", () => {
  element.selecionarCategoria();
  element.verificarCategoria();
});

And("adiciono um produto no carrinho", () => {
  element.salvarValor()
  element.selecionarProduto();
  element.verificarDescricao();
  element.adicionarAoCarrinho();
});

And("clico no ícone do carrinho", () => {
  element.clicarNoCarrinho();
  element.verificarUrl();
});

Then("o produto deve ser adicionado no carrinho com sucesso", () => {
  element.verificarProduto()
  element.compararValor()
});

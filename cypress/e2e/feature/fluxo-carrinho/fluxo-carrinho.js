import { Given, When, And, Then } from "cypress-cucumber-preprocessor/steps";
const element =
  require("../../../support/pages/elements-fluxo-carrinho").ELEMENTS;

const userId = "823251701";
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjMyNTE3MDEsInN1YiI6ImtlZWdnb3Rlc3QiLCJyb2xlIjoiVVNFUiJ9.pbHhPMYWGQNxYLrXaQmiXikSEJwSpLSV2utSfTWuQ7U";

Given("que estou logado no Advantage Online Shopping", () => {
  cy.visit("/");
  element.verificarHomepage();
  element.menuUsuario();
  element.username();
  element.senha();
  element.botaoLogar();
  element.verificarUsuario();
});

And("estou com meu carrinho vazio", () => {
  cy.request({
    method: "DELETE",
    url: `https://www.advantageonlineshopping.com/order/api/v1/carts/${userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
    failOnStatusCode: false,
  }).as("deleteCartResponse");
});

And("status da resposta é {int}", (expectedStatusCode) => {
  cy.get("@deleteCartResponse").its("status").should("eq", expectedStatusCode);
});

When("seleciono uma categoria", () => {
  element.selecionarCategoria();
  element.verificarCategoria();
});

And("adiciono um produto no carrinho", () => {
  element.salvarValor();
  element.selecionarProduto();
  element.verificarDescricao();
  element.adicionarAoCarrinho();

  cy.intercept("POST", "**").as("addToCart");
});

And("clico no ícone do carrinho", () => {
  element.clicarNoCarrinho();
  element.verificarUrl();
});

And("o produto deve ser adicionado no carrinho com sucesso", () => {
  cy.intercept("POST", "**").as("addToCart");
  cy.wait("@addToCart").its("response.statusCode").should("eq", 204);

  element.verificarProduto();
  element.compararValor();

  cy.wait("@addToCart").its("response.statusCode").should("eq", 204);

  cy.get("@addToCart").then((interception) => {
    console.log(interception.response.body);
  });

  And("clico no botão de checkout", () => {
    element.botaoCheckout();
  });

  Then("verifico o valor total", () => {
    element.sumarioNome();
    element.sumarioQtd();
    element.sumarioCor();
    element.valorTotal();
  });
});

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const element = require("../../../support/pages/elements-carts").ELEMENTS;

let response;
const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJ3d3cuYWR2YW50YWdlb25saW5lc2hvcHBpbmcuY29tIiwidXNlcklkIjo4MjMyNTE3MDEsInN1YiI6ImtlZWdnb3Rlc3QiLCJyb2xlIjoiVVNFUiJ9.pbHhPMYWGQNxYLrXaQmiXikSEJwSpLSV2utSfTWuQ7U";

Given("que eu sou um usuário autenticado com o ID {string}", (userId) => {
  element.userId(userId);
});

When("eu fizer uma requisição para ver meu carrinho de compras", function () {
  cy.request({
    method: "GET",
    url: `https://www.advantageonlineshopping.com/order/api/v1/carts/${this.userId}`,
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => {
    response = res;
    cy.wrap(response).as("response");
  });
});

Then("a resposta deve conter o status {string}", (status) => {
  element.resStatus(status);
});

Then("o ID do usuário deve ser {string}", (userId) => {
  element.resUserId(userId);
});

Then("deve haver produtos no carrinho", () => {
  element.resCart();
});

Then("o produto deve ter o nome {string}", (productName) => {
 element.resName(productName);
});

Then("o preço deve ser {string}", (price) => {
  expect(response.body.productsInCart[0].price).to.eq(parseFloat(price));
});

Then("a quantidade deve ser {string}", (quantity) => {
  expect(response.body.productsInCart[0].quantity).to.eq(parseInt(quantity));
});

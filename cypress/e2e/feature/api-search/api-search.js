import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

let response;

Given("que eu busco por {string}", (productName) => {
  cy.request(
    "GET",
    `https://www.advantageonlineshopping.com/catalog/api/v1/products/search?name=${encodeURIComponent(
      productName
    )}`
  ).then((res) => {
    response = res;
  });
});

When("a resposta da API é recebida", () => {
  expect(response).to.not.be.null;
  expect(response.status).to.eq(200);
});

Then(
  "todos os produtos na resposta devem ter o nome {string}",
  (productName) => {
    const products = response.body.flatMap((category) => category.products);
    products.forEach((product) => {
      expect(product.productName).to.eq(productName);
    });
  }
);

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const element = require("../../../support/pages/elements-login").ELEMENTS;

Given("que estou na página inicial do Advantage Online Shopping", () => {
  cy.visit("/");
});

When("eu clico no botão de login", () => {
  element.menuUsuario();
});

When("eu preencho o campo de nome de usuário com {string}", (username) => {
  element.username(username);
});

When("eu preencho o campo de senha com {string}", (password) => {
  element.senha(password);
});

When("eu clico no botão de submeter", () => {
  element.botaoLogar();
});

Then("devo estar logado com sucesso com usuário {string}", (username) => {
  element.verificarUsuario(username);
});

import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";

const utils = require("../../../support/utils/elements-login").ELEMENTS;

Given("que estou na página inicial do Advantage Online Shopping", () => {
  cy.visit("/");
});

When("eu clico no botão de login", () => {
  utils.menuUsuario();
});

When("eu preencho o campo de nome de usuário com {string}", (username) => {
  utils.username(username);
});

When("eu preencho o campo de senha com {string}", (password) => {
  utils.senha(password);
});

When("eu clico no botão de submeter", () => {
  utils.botaoLogar();
});

Then("devo estar logado com sucesso com usuário {string}", (username) => {
  utils.verificarUsuario(username);
});

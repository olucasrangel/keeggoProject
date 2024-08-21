export const ELEMENTS = {
    menuUsuario: () => cy.get('#menuUserLink').click(),
    username: (username) => cy.get('input[name="username"]').type(username),
    senha: (password) => cy.get('input[name="password"]').type(password),
    botaoLogar: () => cy.get('#sign_in_btn').click(),
    verificarUsuario: (username) => cy.get('#menuUserLink').should('contain', (username)),
};
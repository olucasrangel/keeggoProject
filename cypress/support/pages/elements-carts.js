export const ELEMENTS = {
  userId: (userId) => cy.wrap(userId).as("userId"),
  response: (response) => cy.wrap(response).as("response"),
  resStatus: (status) =>
    cy.get("@response").its("status").should("eq", parseInt(status)),
  resUserId: (userId) =>
    cy.get("@response").its("body.userId").should("eq", parseInt(userId)),
  resCart: () =>
    cy
      .get("@response")
      .its("body.productsInCart")
      .should("have.length.greaterThan", 0),
  resName: (productName) =>
    cy
      .get("@response")
      .its("body.productsInCart[0].productName")
      .should("eq", productName),
};

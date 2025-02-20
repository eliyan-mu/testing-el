describe("template spec", () => {
  it("check button of the add", () => {
    cy.visit("http://localhost:5173/");
    cy.get('[data-cy="input-button"]').type(
      "wite the testing of the project :)"
    );
    cy.get('[data-cy="submit-button"]').click();
  });
});

describe("template spec", () => {
  it("has to check the check-box", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="check-box"]').check();
  });
});

describe("template spec", () => {
  it("has to check the delete-button", () => {
    cy.visit("http://localhost:5173/");

    cy.get('[data-cy="delete-button-1"]').click();
  });
});

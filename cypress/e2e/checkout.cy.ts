/// <reference types="cypress" />
describe("Checkout for action click button for add or remove item", () => {
  it("Default Case", () => {
    cy.visit("/");
    cy.get("#addItem-1").click();
    cy.get("#addItem-2").click();
    cy.get("#addItem-3").click();
    cy.wait(3000);
  });

  it("Customer: Microsoft", () => {
    cy.visit("/");
    cy.get("select")
      .select("Microsoft", { force: true })
      .should("have.value", "Microsoft");
    cy.get("#addItem-1").click().click().click();
    cy.wait(3000);
  });

  it("Customer: Amazon", () => {
    cy.visit("/");
    cy.get("select").select("Amazon").should("have.value", "Amazon");
    cy.get("#addItem-3").click();
    cy.wait(3000);
  });

  it("Customer: Facebook", () => {
    cy.visit("/");
    cy.get("select").select("Facebook").should("have.value", "Facebook");
    cy.get("#addItem-2").click().click().click().click().click();
    cy.wait(3000);
  });
});

describe("Checkout for action fill input", () => {
  it("Default Case", () => {
    cy.visit("/");
    cy.get("#quantity-1").type("1");
    cy.get("#quantity-2").type("1");
    cy.get("#quantity-3").type("1");
    cy.wait(3000);
  });

  it("Customer: Microsoft", () => {
    cy.visit("/");
    cy.get("select")
      .select("Microsoft", { force: true })
      .should("have.value", "Microsoft");
    cy.get("#quantity-1").type("4");
    cy.wait(3000);
  });

  it("Customer: Amazon", () => {
    cy.visit("/");
    cy.get("select").select("Amazon").should("have.value", "Amazon");
    cy.get("#quantity-3").type("2");
    cy.wait(3000);
  });

  it("Customer: Facebook", () => {
    cy.visit("http://localhost:5173/");
    cy.get("select").select("Facebook").should("have.value", "Facebook");
    cy.get("#quantity-2").type("6");
    cy.wait(2000);
  });
});

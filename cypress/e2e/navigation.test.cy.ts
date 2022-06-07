describe("React Router and Next Router should mix", () => {
  it("can navigate from React Router to React Router", () => {
    cy.visit("localhost:3000");
    cy.get("h1").should("contain.text", "/");

    cy.get("[data-testid=test-rr]").click();
    cy.get("h1").should("contain.text", "/test");

    cy.get("[data-testid=home-rr]").click();
    cy.get("h1").should("contain.text", "/");
  });

  it("can navigate from React Router to Next Router", () => {
    cy.visit("localhost:3000");
    cy.get("h1").should("contain.text", "/");

    cy.get("[data-testid=next-nr]").click();
    cy.get("h1").should("contain.text", "/next");
  });

  it("can navigate from Next Router to React Router", () => {
    cy.visit("localhost:3000/next");
    cy.get("h1").should("contain.text", "/next");

    cy.get("[data-testid=test-rr]").click();
    cy.get("h1").should("contain.text", "/test");
  });

  it("can navigate from Next Router to React Router via native anchor", () => {
    cy.visit("localhost:3000/next");
    cy.get("h1").should("contain.text", "/next");

    cy.get("[data-testid=test-a]").click();
    cy.get("h1").should("contain.text", "/test");
  });
});

context("Cypress.Commands", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/map-buildings");
  });
  describe("map page", () => {
    it("should show text", () => {
      cy.contains("Selecione o prédio para ver no mapa").should("be.visible");
    });
    it("should show map", () => {
      cy.get("#map").should("be.visible");
    });
    it("should try to load rooms", () => {
      cy.get("#buildings").should("be.visible");
    });
    it("should load rooms", () => {
      cy.get("#buildings").should("have.descendants", "#building-card");
    });
    it("should show checkbox", () => {
      cy.get("#building-card").click();
      cy.get("#checkbox").should("be.visible");
    });
    it("should check the checkbox", () => {
      cy.get("#building-card").click();
      cy.get("#checkbox-box").click().should("be.checked");
    });
    it("should show marker on map after click on checkbox", () => {
      cy.get("#building-card").click();
      cy.get("#checkbox-box").click();
      cy.get("#marker").should("exist");
    });
  });
});

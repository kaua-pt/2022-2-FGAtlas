context("Cypress.Commands", () => {
  beforeEach(() => {
    cy.visit("http://127.0.0.1:5173/map");
  });
  describe("map page", () => {
    it("should show text", () => {
      cy.contains("Selecione a turma para ver no mapa").should("be.visible");
    });
    it("should show map", () => {
      cy.get("#map").should("be.visible");
    });
    it("should try to load subjects", () => {
      cy.get("#subject-info").should("be.visible");
    });
    it("should load subjects", () => {
      cy.get("#subject-info").should("have.descendants", "#card-subject");
    });
    it("should show checkbox", () => {
      cy.get("#card-subject").click();
      cy.get("#checkbox").should("be.visible");
    });
    it("should check the checkbox", () => {
      cy.get("#card-subject").click();
      cy.get("#checkbox-box").click().should("be.checked");
    });
    it("should show marker on map after click on checkbox", () => {
      cy.get("#card-subject").click();
      cy.get("#checkbox-box").click();
      cy.get('#marker').should('exist');  
    });
  });
});

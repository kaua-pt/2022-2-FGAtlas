context('Cypress.Commands', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5173/')
})

describe('superior menu', () => {
  it('should go to map', () => {
    cy.contains("Mapa").click();
    cy.url().should("equal", "http://127.0.0.1:5173/map");
  });
  it('should show contacts info', () => {
    cy.contains("Contato").click();
    cy.contains("fgatlas@gmail.com").should("be.visible");
  });
  it('should show developers info', () => {
    cy.contains("Sobre").click();
    cy.contains("Estudante").should("be.visible");
  });
});
describe('map buttons', () => {
  it('should go to map', () => {
    cy.contains("Encontrar sala").click();
    cy.url().should("equal", "http://127.0.0.1:5173/map");
  });
  it('should show contacts info', () => {
    cy.contains("ENCONTRAR PRÉDIO").click();
    cy.url().should("equal", "http://127.0.0.1:5173/map-buildings");
  });
});
});
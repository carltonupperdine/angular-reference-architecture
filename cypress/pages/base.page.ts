export abstract class BasePage {
  abstract visit(): void;

  get heading() {
    return cy.get('h1');
  }
}

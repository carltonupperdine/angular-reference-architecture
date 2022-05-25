import { BasePage } from '../base.page';

export class TasksIndexPage extends BasePage {
  visit(): void {
    cy.visit('/tasks');
  }

  get header() {
    return cy.get('div.header');
  }

  get table() {
    return cy.get('table');
  }
}

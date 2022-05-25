import { TaskFormPage } from './taskForm.page';

export class CreateTaskPage extends TaskFormPage {
  visit(): void {
    cy.visit('/tasks/create');
  }
}

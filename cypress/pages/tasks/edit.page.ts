import { TaskFormPage } from './taskForm.page';

export class EditTaskPage extends TaskFormPage {
  visit(): void {
    cy.visit('/tasks/edit/1');
  }
}

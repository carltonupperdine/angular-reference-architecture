import { BasePage } from '../base.page';

export abstract class TaskFormPage extends BasePage {
  private get title() {
    return cy.get('#title');
  }
  private get description() {
    return cy.get('#description');
  }
  private get due() {
    return cy.get('#due');
  }

  addTitle(title: string) {
    this.title.clear().type(title);
  }

  addDescription(description: string) {
    this.description.clear().type(description);
  }

  addDueDate(dueDate: string) {
    this.due.clear().type(dueDate);
  }

  addTask(title: string, description: string, dueDate?: string) {
    this.addTitle(title);
    this.addDescription(description);
    if (dueDate) this.addDueDate(dueDate);
  }

  get actionButton() {
    return cy.get('#actionButton');
  }
}

export class TaskFormBuilder {
  constructor(
    private title: string = '',
    private description: string = '',
    private dueDate?: Date
  ) {}

  withTitle(title: string): TaskFormBuilder {
    return new TaskFormBuilder(title, this.description, this.dueDate);
  }

  withDescription(description: string): TaskFormBuilder {
    return new TaskFormBuilder(this.title, description, this.dueDate);
  }

  withDueDate(dueDate: Date) {
    return new TaskFormBuilder(this.title, this.description, dueDate);
  }

  build(): { title: string; description: string; dueDate?: string } {
    return {
      title: this.title,
      description: this.description,
      dueDate: this.dueDate?.toLocaleDateString()
    };
  }
}

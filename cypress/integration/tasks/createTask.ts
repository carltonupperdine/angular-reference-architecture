import { CreateTaskPage } from 'cypress/pages/tasks/create.page';
import { TaskFormBuilder } from 'cypress/pages/tasks/taskForm.page';

describe('Create Task', () => {
  let page: CreateTaskPage;

  before(() => {
    page = new CreateTaskPage();
    page.visit();
  });

  it('Should have the correct page title', () => {
    page.heading.contains('Create a new Task');
  });

  it('Should have a Create button', () => {
    page.actionButton.contains('Create');
  });

  it('Should allow you to Create a new Task', () => {
    const { title, description, dueDate } = new TaskFormBuilder()
      .withTitle('Test Task')
      .withDescription('Test Task Description')
      .withDueDate(new Date())
      .build();

    page.addTask(title, description, dueDate);
    page.actionButton.click();
  });
});

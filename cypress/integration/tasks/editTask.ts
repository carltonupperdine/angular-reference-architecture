import { EditTaskPage } from 'cypress/pages/tasks/edit.page';
import { TaskFormBuilder } from 'cypress/pages/tasks/taskForm.page';

describe('Edit Task', () => {
  let page: EditTaskPage;

  before(() => {
    page = new EditTaskPage();
    page.visit();
  });

  it('Should have the correct page title', () => {
    page.heading.contains('Editing Task 1');
  });

  it('Should let you modify the Task title, description and due date', () => {
    const { title, description, dueDate } = new TaskFormBuilder()
      .withTitle('Task #10')
      .withDescription('Description has been edited')
      .withDueDate(new Date())
      .build();

    page.addTask(title, description, dueDate);
  });

  it('Should have an Update button', () => {
    page.actionButton.contains('Update');
  });

  it('Should allow you to click the Update button', () => {
    page.actionButton.click();
  });
});

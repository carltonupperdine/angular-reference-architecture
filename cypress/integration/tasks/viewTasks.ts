import { TasksIndexPage } from 'cypress/pages/tasks/index.page';

describe('View Tasks', () => {
  let page: TasksIndexPage;

  before(() => {
    page = new TasksIndexPage();
    page.visit();
  });

  it('Should display the correct page title', () => {
    page.header.contains('Tasks');
  });

  it('Should display the correct page description', () => {
    page.header.contains('Here you can view, create, edit and complete tasks.');
  });

  it('Should contain the correct number of elements in the table', () => {
    page.table.get('tr.mat-row').should('have.length', 3);
  });

  it('Should contain a button to create a new task', () => {
    page.header.get('button').contains('Create');
  });
});

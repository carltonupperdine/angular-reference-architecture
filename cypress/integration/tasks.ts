describe('Tasks', () => {
  before(() => {
    cy.visit('/tasks');
  });

  describe('Index Page', () => {
    it('Should display the correct page title', () => {
      cy.get('div.header').contains('Tasks');
    });

    it('Should display the correct page description', () => {
      cy.get('div.header').contains(
        'Here you can view, create, edit and complete tasks.'
      );
    });

    it('Should contain the correct number of elements in the table', () => {
      cy.get('table').get('tr.mat-row').should('have.length', 3);
    });

    it('Should contain a button to create a new task', () => {
      cy.get('div.header').get('button').contains('Create');
    });
  });

  describe('Create Page', () => {
    before(() => {
      cy.get('div.header').get('button').contains('Create').click();
    });

    it('Should have the correct page title', () => {
      cy.contains('Create a new Task');
    });

    it('Should have a Create button', () => {
      cy.get('#actionButton').contains('Create');
    });

    it('Should allow you to Create a new Task', () => {
      cy.get('#title').type('Test Task');
      cy.get('#description').type('Test Task Description');
      cy.get('#due').type('01/06/2022');
      cy.get('#actionButton').contains('Create').click();
      cy.get('table')
        .get('tr.mat-row')
        .last()
        .contains('Test Task Description');
    });
  });

  describe('Edit Page', () => {
    before(() => {
      cy.get('table')
        .get('tr.mat-row')
        .first()
        .children('td')
        .contains('1')
        .click();
    });

    it('Should have the correct page title', () => {
      cy.contains('Editing Task 1');
    });

    it('Should let you modify the Task title,  and ', () => {
      cy.get('#title').type('0');
    });

    it('Should let you modify the Task description', () => {
      cy.get('#description').type(' has been edited');
    });

    it('Should let you modify the Task due date', () => {
      cy.get('#due').type('12/12/2022');
    });

    it('Should have an Update button', () => {
      cy.get('#actionButton').contains('Update');
    });

    it('Should allow you to click the Update button', () => {
      cy.get('#actionButton').click();
    });

    it('Should show the updated information in the Task table', () => {
      cy.get('table').get('tr.mat-row').first().contains('Task #10');
      cy.get('table')
        .get('tr.mat-row')
        .first()
        .contains('My first task has been edited');
      cy.get('table').get('tr.mat-row').first().contains('12/12/2022');
    });
  });
});

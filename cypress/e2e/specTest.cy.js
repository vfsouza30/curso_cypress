describe('Delete Cypress example', () => {
  beforeEach(() => {
    cy.visit('https://example.cypress.io/todo')
  })

  it('Deve adicionar uma tarefa', () => {
    cy.get('.new-todo').type('Nova tarefa{enter}');
  })

  it('Deve filtrar tarefas completas', () => {
    cy.get(':nth-child(1) > .view > .toggle').click();
    cy.contains('a', 'Completed').click();
    cy.get('.todo-list li')
    .should('have.length', 1);
  })

  it('Deve filtrar tarefas ativas', () => {
    cy.contains('a', 'Active').click();
    cy.get('.todo-list li')
    .should('have.length', 2);
  })

  it('Deve deletar uma tarefa', () => {
    cy.DeletarToDo('n', 1)
  })

  //Flaky test
  it('Deve deletar todas tarefas', () => {  
    cy.DeletarToDo('y', 0)
  })
})
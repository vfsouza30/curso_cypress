Cypress.Commands.add('login', (email, password) => {
    cy.get('#email').type(email);
    cy.get('#pass').type(password);
    cy.contains('button', 'Entrar').click();
})

Cypress.Commands.add('loginIncorreto', (email, password, msgEmail, msgSenha) => {
    if(email != '' && password != '') {
        cy.get('#email').type(email);
        cy.get('#pass').type(password);
    }

    cy.contains('button', 'Entrar').click();
    cy.contains(msgEmail).should('be.visible');
    cy.contains(msgSenha).should('be.visible');
})

Cypress.Commands.add('cadastrar', (usuario) => {     
            cy.get('#name').clear().type(usuario.nome);
            cy.get('#email').clear().type(usuario.email);
            cy.get('#pass-create').clear().type(usuario.password);
            cy.get('#pass-confirm').clear().type(usuario.password);
            cy.contains('button', 'Cadastrar').click();
})

Cypress.Commands.add('cadastrarIncorreto', (msgNome, msgEmail, msgPassword, msgRepeatPassword) => {
      cy.contains(msgNome).should('be.visible');
      cy.contains(msgEmail).should('be.visible');
      cy.contains(msgPassword).should('be.visible');
      cy.contains(msgRepeatPassword).should('be.visible');;
})

Cypress.Commands.add('DeletarToDo', (deletedAll, lenghtToDo) => {
    if(deletedAll === 'y'){
        cy.get('[for="toggle-all"]').click();
        cy.get('.clear-completed').click();
        cy.get('.clear-completed').should('not.exist');
    }else{
        cy.get(':nth-child(1) > .view > .toggle').click();
        cy.get('.clear-completed').click();
    }
    cy.get('.todo-list li')
    .should('have.length', lenghtToDo);

})


// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
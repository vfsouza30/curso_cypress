describe('Verificação da tela de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-frontend-cypress.vercel.app/');
      cy.get('[href="/login"]').click();

      //o site Adopet atual não funciona da forma apresentada no vídeo
      cy.intercept('POST', 'https://adopet-api-i8qu.onrender.com/adotante/login', {
        statusCode: 404, }).as('stubPost')
    })

    it('Deve preencher os campos do formulário de login de forma incorreta e exibir mensagens ao usuário', () => {
      cy.loginIncorreto('aa@aa', 'a', 'Por favor, verifique o email digitado', 'A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres');
    })

    it('Deve não informar os campos do formulário de login e exibir mensagens ao usuário', () => {
      cy.loginIncorreto('', '', 'É necessário informar um endereço de email', 'Insira sua senha');
    })

    //o site Adopet atual não funciona da forma apresentada no vídeo
    it('Deve falhar mesmo que os campos sejam preenchidos corretamente', () => {
      cy.login('victor@gmail.com', 'Senha123');
      cy.wait('@stubPost');
      cy.contains('Falha no login. Consulte suas credenciais.').should('be.visible');
    })
})
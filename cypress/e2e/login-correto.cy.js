describe('Verificação da tela de login', () => {
    beforeEach(() => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.get('[href="/login"]').click();
    })

    it('Deve preencher os campos do formulário de login corretamente e autenticar o usuário na página', () => {
      cy.login('victorfosuza30@gmail.com', 'Senha123');
    });
  })
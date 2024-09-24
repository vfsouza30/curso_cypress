describe('Verificação da tela de cadastro', () => {
    beforeEach(() => {
      cy.visit('https://adopet-tau.vercel.app/');
      cy.get('[href="/cadastro"]').click();
      cy.contains('button', 'Cadastrar').click();
    });

    it('Deve não preencher os campos do formulário e exibir mensagens ao usuário', () => {
      cy.cadastrarIncorreto(
        'É necessário informar seu nome', 
        'É necessário informar um endereço de email',
        'Crie uma senha',
        'Repita a senha criada acima'
      );
    })
  })
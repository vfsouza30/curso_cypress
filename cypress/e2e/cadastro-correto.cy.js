describe('Verificação da tela de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://adopet-tau.vercel.app/');
    cy.get('[href="/cadastro"]').click();
  })

  it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () => { 
    cy.cadastrar('Victor Fernandes', 'victorfsouza30@gmail.com', 'Senha123');
  })
})



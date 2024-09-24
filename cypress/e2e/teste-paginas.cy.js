describe('Verificação da tela de pets disponíveis para adoção', () => {
    beforeEach(() => {
      cy.visit('https://adopet-tau.vercel.app/');
    });
  
    it('Ao clicar no botão "Ver pets disponíveis para adoção" deve conseguir visualizar a tela junto das suas informações', () => {
      cy.contains('a', 'Ver pets disponíveis para adoção').click();
    });

    it('Ao clicar no botão "Home" deve realizar o retorno para a tela principal', () => {
        cy.get('a[aria-label="Tela inicial"]').click();
    });

    it('Ao clicar no botão "Ir para Mensagens", deve direcionar para a tela de login', () => {
        cy.get('a[aria-label="Ir para Mensagens"]').click();
    });

    it('Direcionamento para a tela de Login', () => {
        cy.visit('https://adopet-tau.vercel.app/login');
    });

    it('Direcionamento para a tela de Home', () => {
        cy.visit('https://adopet-tau.vercel.app/home');
        cy.get('.cards img').each(($img) => {
          cy.wrap($img).should('be.visible');
        })
    });

    it('Acesso a página de Home e verificação do botão "Falar com o responsável". Ao clicar deve direcionar para a tela de login', () => {
        cy.visit('https://adopet-tau.vercel.app/home');
        cy.get(':nth-child(1) > .card__contact').click()
    });

    it('Ao passar o mouse na logo na tela inicial, deve mostrar o title', () => {
        cy.title().should('eq', 'AdoPet');
    });
    
      it('Na tela principal, deve encontrar o parágrafo: "Adotar pode mudar uma vida". Que tal buscar seu novo melhor amigo hoje? Vem com a gente!', () => {
        cy.contains('p', 'Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

  })

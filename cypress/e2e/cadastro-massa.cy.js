import { usuarios } from '../fixtures/usuarios.json';

describe('Página de cadastro', () =>{
    beforeEach(() => {
        cy.visit('https://adopet-tau.vercel.app/');
        cy.get('[href="/cadastro"]').click();
      })
    
    usuarios.map((usuario) => {
        it('Deve preencher os campos do formulário corretamente para cadastrar um novo usuário', () =>{
            cy.cadastrar(usuario);
        });
    })
})
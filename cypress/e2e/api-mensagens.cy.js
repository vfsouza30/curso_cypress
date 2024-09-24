//Não vai funcioar pois o site da Adopet não está com
//essas funcionalidades

describe('Api Adopet', () => {

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'URL',
            headers: Cypress.env('auth')
        }).then((res) => {
            expect(res.status).to.be.equal(200);
            expect(res.body).is.not.empty;
            expect(res.body).to.have.property('msg');
        })
    })
})
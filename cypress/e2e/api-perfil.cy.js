//Não vai funcioar pois o site da Adopet não está com
//essas funcionalidades

describre('Api Perfil', () => {
    const auth = `Bearer Token usuário`;
})

it('Acesso ao perfil retorna nome de usuário', () => {
    cy.request({
        method: 'GET',
        url: 'URL',
        headers: { auth }
    }).then((res) => {
        expect(res.status).to.be.equal(200);
        expect(res.body).is.not.empty;
        expect(res.body).to.have.property('perfil');
        expect(res.body.perfil.nome).to.be.equal('victor')
    })
})
describe('Products Check of API', () => {
  it('Get All Products', () => {
      let id = 1006
    cy.api({
        url: Cypress.config().baseAPIUrl+'/products:'+id,
        method: 'GET',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
  })
})
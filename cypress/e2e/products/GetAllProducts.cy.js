describe('Products Check of API', () => {
  it('Get All Products', () => {
    cy.api({
        url: Cypress.config().baseAPIUrl+'/products',
        method: 'GET',
        failOnStatusCode: false
    }).then((response) => {
        expect(response.status).to.eq(200)
    })
  })
})
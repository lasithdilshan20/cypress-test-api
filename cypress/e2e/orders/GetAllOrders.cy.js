import {getAllOrder, registerNewClient} from "../../apiObjects/api";

describe('Get All Order', () => {
    before(() => {
        registerNewClient('/clients', 200);
        cy.fixture('token.json').as('token');
    });

    it('Get ALL order', function() {
        cy.get('@token').then((token) => {
            getAllOrder('orders', token.token, 201);
        });
    });
});

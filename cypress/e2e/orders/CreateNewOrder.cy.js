import {createNewOrder, registerNewClient} from "../../endpoint/api";

describe('Create New Order', () => {
    before(() => {
        registerNewClient('/clients', 200);
        cy.fixture('token.json').as('token');
    });

    it('should create a new order', function() {
        cy.get('@token').then((token) => {
            createNewOrder('orders', token.token, 201, 2001, 2002);
        });
    });
});
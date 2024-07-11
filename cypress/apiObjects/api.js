import spok from "cy-spok";
const apiUrl = Cypress.config().baseAPIUrl;

export const checkAPIStatus = (endpoint, expectedStatus, expectedBody) => {
    cy.api({
        url: apiUrl + endpoint,
        method: 'GET',
        failOnStatusCode: false
    }).should(spok({
        status: expectedStatus,
        body: expectedBody
    }));
};

export const getAllProducts = (endpoint,expectedStatus) => {
    cy.api({
        url: apiUrl + endpoint,
        method: 'GET',
        failOnStatusCode: false
    }).should(spok({
        status: expectedStatus,
        body: {
            totalResults: spok.number,
            currentPage: spok.number,
            totalPages: spok.number,
            products: spok.array
        }
    }))
};

export const getSingleProducts = (productID,expectedStatus) => {
    if (productID === undefined && expectedStatus !== 200) {
        cy.api({
            url: apiUrl + '/products/' + productID,
            method: 'GET',
            failOnStatusCode: false
        }).should(spok({
            status: expectedStatus,
            body: {
                category: spok.string,
                name: spok.string
            }
        }))
    }
    else {
        cy.api({
            url: apiUrl + '/products/' + productID,
            method: 'GET',
            failOnStatusCode: false
        }).should(spok({
            status: expectedStatus
        }))
    }
};

export const registerNewClient = (endpoint,expectedStatus) => {
    cy.api({
        url: apiUrl + endpoint,
        method: 'POST',
        failOnStatusCode: false,
        body: {
            email: "test" + Math.floor(Math.random() * 1000) + "@test.com"
        }
    }).should(spok({
        status: expectedStatus,
        body: {
            token: spok.string
        }
    })).then(response => {
        cy.writeFile('cypress/fixtures/token.json', { token: response.body.token });
    });
};

export const createNewOrder = (endpoint,tokenKey,expectedStatus, productsID1,productsID2) => {
        cy.api({
            method: 'POST',
            url: `${apiUrl}/${endpoint}`,
            headers: {
                "x-api-key": tokenKey
            },
            body: {
                "customerName": "{{$randomFullName}}",
                "products": [
                    {
                        "id": productsID1,
                        "quantity": 1
                    },
                    {
                        "id": productsID2,
                        "quantity": 3
                    }
                ]
            }
        }).should(spok({
            status: expectedStatus,
            body: {
                id: spok.string,
                customerName: spok.string,
                products: spok.array
            }
        }))
}

export const getAllOrder = (endpoint,tokenKey,expectedStatus) => {
    cy.api({
        method: 'GET',
        url: `${apiUrl}/${endpoint}`,
        headers: {
            "x-api-key": tokenKey
        }
    }).should(spok({
        status: expectedStatus,
        body: {
            id: spok.string,
            created: spok.string,
            customerName: spok.string
        }
    }))
}
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
        return response.body.token;
    });
};
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
}
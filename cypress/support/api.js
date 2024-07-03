import spok from "cy-spok";

export const checkAPIStatus = (endpoint, expectedStatus, expectedBody) => {
    cy.api({
        url: Cypress.config().baseAPIUrl + endpoint,
        method: 'GET',
        failOnStatusCode: false
    }).should(spok({
        status: expectedStatus,
        body: expectedBody
    }));
};
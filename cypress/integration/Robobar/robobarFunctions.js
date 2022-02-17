export default {

    colaButton() {
        return cy.get(':nth-child(1) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    },

    beerButton() {
        return cy.get(':nth-child(2) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    },

    wineButton() {
        return cy.get(':nth-child(3) > :nth-child(3) > .row > .col-5 > .input-group-append > .btn');
    },

    totalText() {
        return cy.get(':nth-child(4) > .ng-binding');
    },

    checkOut() {
        return cy.get('.col-12 > .btn');
    },

    ageInput() {
        return cy.get('#ageInput');
    },

    orderButton() {
        return cy.get('.btn-success');
    },

    confirmText() {
            return cy.get('p');
    },

    alertAge() {
        return cy.get(':nth-child(2) > :nth-child(1) > .alert');
    }
}


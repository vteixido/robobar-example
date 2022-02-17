import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then} from "cypress-cucumber-preprocessor/steps" 
import { When } from "cypress-cucumber-preprocessor/steps"
//import robobarFunctions from "./robobarFunctions";
import robobar from "./robobarFunctions.js";

//Functions

const url = 'http://localhost:3000/'
Given('user opens robobar website', () => {
    cy.visit(url)
})

When('user adds a cola', () => {
    robobar.colaButton().click();
})


Then('total should be {string}', (total) => {
    robobar.totalText().should("contain.text", total);
})

When('user adds a beer', () => {
    robobar.beerButton().click();
})

When('user adds {int} cola', (n) => {
    for(let i=0; i<n; i++) {
        robobar.colaButton().click();
    }
})


Then('total should be €{float}', (total) => {
    robobar.totalText().should("contain", "€"+total);
})


/*Then('total should be €{float}', (price)=>{
    cy.get(':nth-child(4) > .ng-binding')
        .should('contain', "€" + price)
})*/


import { Given } from "cypress-cucumber-preprocessor/steps";
import { Then} from "cypress-cucumber-preprocessor/steps" 
import { When } from "cypress-cucumber-preprocessor/steps"
import robobarFunctions from "./robobarFunctions";
import robobar from "./robobarFunctions";

//Functions

const url = 'http://localhost:3000/'
Given('user opens robobar website', () => {
    cy.visit(url)
})

When('user adds a cola', () => {
    robobar.colaButton().click()
})

Then('total should be {string}', (total) => {
    robobar.totalText().should("contain.text", total);
})

When('user adds a beer', () => {
    robobar.beerButton().click();
})

When('user adds {int} cola', (n) => {
    for(i=0; n<i; i++){
        robobar.colaButton().click();
    }
})



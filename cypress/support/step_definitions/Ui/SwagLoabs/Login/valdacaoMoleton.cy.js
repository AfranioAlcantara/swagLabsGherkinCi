import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";


Then(/^devera encontrar a moleton Sauce Labs Fleece Jacket na tela inicial$/, () => {
	cy.get('#item_5_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Fleece Jacket')
});

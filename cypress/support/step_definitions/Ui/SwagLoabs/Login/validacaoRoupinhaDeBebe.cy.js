import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";


Then(/^devera encontrar a roupa de bebe Sauce Labs Onesie na tela inicial$/, () => {
	cy.get('#item_2_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Onesie')
});


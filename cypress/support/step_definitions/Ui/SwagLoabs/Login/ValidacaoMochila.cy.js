import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";


When(/^faça login$/, () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
});

Then(/^devera encontrar a mochila Sauce Labs Backpack na tela inicial$/, () => {
	cy.get('#item_4_title_link > .inventory_item_name').should('have.text', 'Sauce Labs Backpack')
});

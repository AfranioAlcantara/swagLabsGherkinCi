import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";


When(/^o usuario banido da plataforma tentar realizar login$/, () => {
    cy.get('[data-test="username"]').type('locked_out_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
});

Then(/^devera receber mensagem indicando que esta banido$/, () => {
	cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Sorry, this user has been locked out.')
});

import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";



When(/^preencher os campos (.*) e (.*) com um usuario invalido$/, (email, senha) => {
	cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(senha)
});

Then(/^devera receber uma mensagem de erro$/, () => {
	cy.get('[data-test="error"]').should('have.text', 'Epic sadface: Username and password do not match any user in this service')
});


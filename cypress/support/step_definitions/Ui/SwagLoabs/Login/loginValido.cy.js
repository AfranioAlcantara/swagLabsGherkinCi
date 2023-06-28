import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";


Given(/^que o usuario acesse a url do site sauce demo$/, () => {
	cy.visit('https://www.saucedemo.com/')
});

When(/^preencher os campos de email e senha$/, () => {
	cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
});

When(/^clicar em login$/, () => {
	cy.get('[data-test="login-button"]').click()
});

Then(/^devera ser logado visualizando os produtos$/, () => {
	cy.get('.title').should('have.text', 'Products')
});

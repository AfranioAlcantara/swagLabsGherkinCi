import { Given,When,Then,} from "@badeball/cypress-cucumber-preprocessor";

When(/^preencher os campos (.*) e (.*) com uma senha invalida$/, (email, senha) => {
    cy.get('[data-test="username"]').type(email)
    cy.get('[data-test="password"]').type(senha)
});

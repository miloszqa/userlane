// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import 'cypress-file-upload';

Cypress.Commands.add('submitApplication', (canddidate) => {
    cy.get("input[data-qa='input-resume']")
      .attachFile('example.pdf');
    cy.get('input[name=name]')
      .type(candidate.name)
    cy.get('input[name=email]')
      .type(candidate.email)
    cy.get('input[name=phone]')
      .type(candidate.phone)
    cy.get('input[placeholder="Type your response]')
      .type(candidate.salary)
    cy.get('[type="checkbox"]')
      .check();
  })
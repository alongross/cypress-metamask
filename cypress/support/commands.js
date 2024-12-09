import 'cypress-metamask';
require('@cypress/xpath');

Cypress.Commands.add('setupMetamask', (secretWords, network, password) => {
    return cy.task('setupMetamask', { secretWords, network, password });
});

import DappPage from '../pages/dappPage';

describe('UI Component Test with MetaMask', () => {
    const dappPage = new DappPage();

    before(() => {
        cy.setupMetamask(Cypress.env('metamaskSeed'), Cypress.env('network'));
    });

    it('Connects wallet and verifies transaction', () => {
        dappPage.visitDapp();
        dappPage.connectWallet();
        dappPage.signTransaction();
        dappPage.verifyTransactionSuccess();
    });
});

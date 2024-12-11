import DappPage from '../pages/dappPage';

describe('UI Component Test with MetaMask via Coti', () => {
    const dappPage = new DappPage();

    before(() => {
        // Visit the Coti dApp before tests
        cy.intercept('GET', '**', (req) => {
            req.headers['User-Agent'] =
                'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36';
            req.continue();
        });
        dappPage.visitDapp();
    });

    it('Connects wallet and verifies transaction', () => {
        // Connect the wallet
        dappPage.connectWallet();

        // Verify wallet connection success
        dappPage.verifyConnectionSuccess();

        // Optional: Sign a transaction
        dappPage.signTransaction();

        // Verify transaction success
        dappPage.verifyTransactionSuccess();
    });
});

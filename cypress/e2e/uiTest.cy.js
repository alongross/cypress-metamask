import DappPage from '../pages/dappPage';

describe('UI Component Test with MetaMask via Coti', () => {
    const dappPage = new DappPage();

    before(() => {
        // Visit the Coti dApp before tests
        dappPage.visitDapp();
    });

    it('Connects wallet and verifies transaction', () => {
        // Connect the wallet
        // dappPage.connectWallet();

        // // Verify wallet connection success
        // dappPage.verifyConnectionSuccess();

        // // Optional: Sign a transaction
        // dappPage.signTransaction();

        // // Verify transaction success
        // dappPage.verifyTransactionSuccess();
    });
});

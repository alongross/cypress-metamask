class DappPage {
    connectWalletButton = "//button[contains(text(), 'Connect Wallet')]";
    confirmationMessage = "//div[contains(@class, 'confirmation-message')]";

    visitDapp() {
        cy.visit('/');
    }

    connectWallet() {
        cy.xpath(this.connectWalletButton).click();
        cy.acceptMetamaskAccess();
    }

    signTransaction() {
        cy.confirmMetamaskSignatureRequest();
    }

    verifyTransactionSuccess() {
        cy.xpath(this.confirmationMessage).should('contain', 'Transaction Successful');
    }
}

export default DappPage;

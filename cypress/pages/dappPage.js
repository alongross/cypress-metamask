class DappPage {
    connectWalletButton = "//button[@class='Button_button-component__zTGW4' and text()='SELECT']";
    confirmationMessage = "//div[contains(@class, 'confirmation-message')]";

    visitDapp() {
        // Navigate to the dApp
        cy.visit('https://treasury.coti.io/');
    }

    connectWallet() {
        // Click the "Connect Wallet" button
        cy.xpath(this.connectWalletButton)
            .should('be.visible') // Ensure it's visible before interacting
            .click();
    }

    verifyConnectionSuccess() {
        // Verify success message or wallet connection state
        cy.xpath(this.confirmationMessage)
            .should('be.visible')
            .and('contain.text', 'Connected');
    }

    signTransaction() {
        // Trigger and confirm transaction signing (if required)
        cy.xpath("//button[contains(text(), 'Sign Transaction')]").click();
    }

    verifyTransactionSuccess() {
        // Verify transaction success message
        cy.xpath(this.confirmationMessage)
            .should('be.visible')
            .and('contain.text', 'Transaction Successful');
    }
}

export default DappPage;

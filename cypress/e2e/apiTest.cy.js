import TransactionService from '../services/transactionService';

describe('End-to-End Flow Test with REST Endpoints', () => {
    const transactionService = new TransactionService();

    it('Initiates, verifies, and monitors a transaction', () => {
        transactionService.initiateTransaction({ amount: 100 }).then((response) => {
            const transactionID = response.transactionID;

            transactionService.verifyTransaction(transactionID).then((verifyResponse) => {
                expect(verifyResponse.status).to.eq(200);
                expect(verifyResponse.body.status).to.eq('pending');

                transactionService.monitorTransaction(transactionID).then((monitorResponse) => {
                    expect(monitorResponse.status).to.eq(200);
                    expect(monitorResponse.body.status).to.eq('processed');
                });
            });
        });
    });
});

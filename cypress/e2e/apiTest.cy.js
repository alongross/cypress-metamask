import TransactionService from '../services/transactionService';

describe('End-to-End Flow Test with REST Endpoints', () => {
    const transactionService = new TransactionService();
    let transactionID;

    it('Initiates and verifies a transaction', () => {
        transactionService.initiateTransaction({ amount: 100 }).then((response) => {
            expect(response.status).to.eq(200);
            transactionID = response.body.transactionID;
        });

        transactionService.verifyTransaction(transactionID).then((response) => {
            expect(response.body.status).to.eq('pending');
        });

        transactionService.monitorTransaction(transactionID).then((response) => {
            expect(response.body.status).to.eq('processed');
        });
    });
});

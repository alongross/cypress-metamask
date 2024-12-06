class TransactionService {
    initiateTransaction(payload) {
        return cy.request({
            method: 'POST',
            url: '/api/transactions/initiate',
            body: payload,
        });
    }

    verifyTransaction(id) {
        return cy.request(`/api/transactions/${id}`);
    }

    monitorTransaction(id) {
        return cy.request(`/api/transactions/${id}/status`);
    }
}

export default TransactionService;

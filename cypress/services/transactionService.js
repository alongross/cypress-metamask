class TransactionService {
    constructor(baseURL) {
        this.baseURL = baseURL || Cypress.env('API_BASE_URL');
    }

    initiateTransaction(payload) {
        return cy.request({
            method: 'POST',
            url: `${this.baseURL}/api/transactions/initiate`,
            body: payload,
            headers: this._getHeaders(),
            failOnStatusCode: false,
        }).then((response) => {
            this._validateResponse(response, 201);
            return response.body;
        });
    }

    verifyTransaction(id) {
        return cy.request({
            method: 'GET',
            url: `${this.baseURL}/api/transactions/${id}`,
            headers: this._getHeaders(),
            failOnStatusCode: false,
        }).then((response) => {
            this._validateResponse(response, 200);
            return response.body;
        });
    }

    monitorTransaction(id) {
        return cy.request({
            method: 'GET',
            url: `${this.baseURL}/api/transactions/${id}/status`,
            headers: this._getHeaders(),
            failOnStatusCode: false,
        }).then((response) => {
            this._validateResponse(response, 200);
            return response.body;
        });
    }

    _getHeaders() {
        return {
            Authorization: `Bearer ${Cypress.env('API_TOKEN')}`,
            'Content-Type': 'application/json',
        };
    }

    _validateResponse(response, expectedStatus) {
        if (response.status !== expectedStatus) {
            cy.log('Unexpected Response:', response);
            throw new Error(`Expected status ${expectedStatus}, but got ${response.status}`);
        }
    }
}

export default TransactionService;

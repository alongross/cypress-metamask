const { defineConfig } = require('cypress');
const metamask = require('cypress-metamask/plugins/index.js');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            metamask(on, config); // Load the MetaMask plugin
            return config;
        },
        baseUrl: 'https://treasury.coti.io',
        video: true,
        supportFile: 'cypress/support',
    },
});

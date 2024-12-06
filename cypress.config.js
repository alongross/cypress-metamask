const { defineConfig } = require('cypress');
const path = require('path');

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.name === 'chrome' || browser.name === 'chromium') {
                    // Add MetaMask extension path
                    launchOptions.extensions.push(path.resolve('path_to_metamask_extension'));
                }

                // Remove unsupported properties
                delete launchOptions.width;
                delete launchOptions.height;
                delete launchOptions.resizable;

                return launchOptions;
            });
            return config;
        },
        baseUrl: 'https://treasury.coti.io',
        supportFile: 'cypress/support',
    },
});

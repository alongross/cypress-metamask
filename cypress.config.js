module.exports = {
    e2e: {
        baseUrl: 'https://treasury.coti.io/',
        supportFile: 'cypress/support',
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser, launchOptions) => {
                if (browser.name === 'chrome' || browser.name === 'chromium') {
                    launchOptions.args.push('--disable-web-security'); // Optional: Disable CORS for testing
                }
                return launchOptions;
            });
        },
    },
};

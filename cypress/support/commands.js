import 'cypress-metamask';
require('@cypress/xpath');

// Remove Cypress-specific artifacts
Cypress.on('window:before:load', (win) => {
    // Delete navigator.webdriver
    delete win.navigator.__proto__.webdriver;

    // Overwrite user agent
    Object.defineProperty(win.navigator, 'userAgent', {
        value: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    });

    // Mock plugins and automation checks
    win.chrome = { runtime: {} };
    win.navigator.permissions.query = (parameters) =>
        parameters.name === 'notifications'
            ? Promise.resolve({ state: 'denied' })
            : Promise.resolve({ state: 'granted' });
});

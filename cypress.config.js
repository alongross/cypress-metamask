const path = require('path');

module.exports = {
    e2e: {
        baseUrl: 'https://treasury.coti.io/',
        supportFile: 'cypress/support',
        setupNodeEvents(on, config) {
            on('before:browser:launch', (browser = {}, launchOptions) => {
                if (browser.name === 'chrome' || browser.name === 'chromium') {
                    // Stealth configurations to avoid detection
                    launchOptions.args.push('--disable-web-security');
                    launchOptions.args.push('--disable-blink-features=AutomationControlled');
                    launchOptions.args.push('--disable-dev-shm-usage');
                    launchOptions.args.push('--no-sandbox');
                    
                    // Adjust browser preferences
                    launchOptions.preferences = {
                        ...launchOptions.preferences,
                        'profile.default_content_setting_values.notifications': 2, // Disable notifications
                        'profile.managed_default_content_settings.popups': 0,
                    };
                }
                return launchOptions;
            });

            on('task', {
                // Example task for debugging (optional)
                log(message) {
                    console.log(message);
                    return null;
                },
            });

            return config;
        },
    },
};

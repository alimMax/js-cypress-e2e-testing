const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.cypress.io'
  },
  retries: {
    runMode: 3
  },
  defaultCommandTimeout: 10000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    reportFilename: '[name].html',
    overwrite: true,
    html: false,
    json: true
  }
});

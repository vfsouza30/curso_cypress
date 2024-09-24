const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'd1mjf1',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    video: true,
    reporter: 'mochawesome',
    reporterOptions: {
      reportDir: 'cypress/results',
      overwrite: false,
      html: true,
      json: false,
      timestamp: "ddmmyyyy_HHMMss"
    }
  },
});

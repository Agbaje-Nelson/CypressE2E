const { defineConfig } = require("cypress");


module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      if (config.isTextTerminal) {
        return {
          excludeSpecPattern:['cypress/e2e/Regression.cy.js']
        }
      }
    },
    baseUrl:"https://alphapay.netlify.app",
    watchForFileChanges:false
    
  },
});


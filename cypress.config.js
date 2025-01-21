const { defineConfig } = require("cypress");

module.exports = defineConfig({

  env: {
    url: "https://cms-qa-fe.joola.qburst.build/"
  },
  
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: 'cypress/integration/joola/*.js'
  },
});

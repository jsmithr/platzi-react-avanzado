const { defineConfig } = require('cypress')

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 500,
  viewportHeight: 800,
  e2e: {
    baseUrl: 'https://platzi-react-avanzado-jsmithr.vercel.app/',
    setupNodeEvents (on, config) {
    }
  }
})

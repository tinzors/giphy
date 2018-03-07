'use strict'
const merge = require('webpack-merge')
const devEnv = require('./dev.env')

module.exports = merge(devEnv, {
  NODE_ENV: '"testing"',
  GIPHY_KEY: '"u34uy9Bh1FQKKAXSL8TFdhw9o6YHEjYC"',
  BASE_URL: '"http://localhost:3000"'
})

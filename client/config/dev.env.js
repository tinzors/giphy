'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  GIPHY_KEY: '"u34uy9Bh1FQKKAXSL8TFdhw9o6YHEjYC"',
  BASE_URL: '"http://localhost:3000/api"'
})

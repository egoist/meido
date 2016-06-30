'use strict'
const express = require('express')
const serveIndex = require('serve-index')
const morgan = require('morgan')

module.exports = function (dir) {
  const app = express()
  app.use(morgan('dev'))
  app.use(express.static(dir))
  app.use('/', serveIndex(dir, {icons: true}))
  return app
}

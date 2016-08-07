'use strict'
const path = require('path')

const _ = module.exports = {}

_.cwd = function (fp) {
  return path.resolve(process.cwd(), fp || '.')
}

'use strict'
const opn = require('opn')
const chalk = require('chalk')
const _ = require('./utils')
const makeServer = require('./make-server')

module.exports = function (options, cb) {
  options = options || {}
  const cwd = _.cwd(options.dir || './')
  const port = options.port || 3000
  const app = makeServer(cwd)
  app.set('port', port)
  app.listen(port, () => {
    if (typeof cb === 'function') {
      return cb(app)
    }
  })
}

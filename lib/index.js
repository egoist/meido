'use strict'
const opn = require('opn')
const chalk = require('chalk')
const tildify = require('tildify')
const _ = require('./utils')
const makeServer = require('./make-server')

module.exports = function (dir, options) {
  options = options || {}
  const cwd = _.cwd(dir)
  const port = options.port || 3000
  const url = `http://localhost:${port}`
  const app = makeServer(cwd)
  app.listen(port, () => {
    console.log(`Meido is dancing with ${chalk.cyan(tildify(cwd))} at ${chalk.green(url)}`)
    if (options.open) opn(url)
  })
}

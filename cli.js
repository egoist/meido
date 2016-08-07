#!/usr/bin/env node
'use strict'
const meow = require('meow')
const main = require('./lib')

const cli = meow(`
  Usage:
    meido [dir] [options]

  Options:
    --open, -o        Open the webpage in browser
    --version, -v     Output version number
    --help, -h        Output help (You are here!)
`, {
  alias: {
    h: 'help',
    v: 'version',
    o: 'open'
  }
})

const options = cli.flags
options.dir = cli.input[0]
main(options, app => {
  console.log(`Listenning at http://localhost:${app.get('port')}`)
})

#!/usr/bin/env node
'use strict'
const meow = require('meow')
const opn = require('opn')
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
  const url = `http://localhost:${app.get('port')}`
  console.log(`Listenning at ${url}`)
  if (options.open) return opn(url)
})

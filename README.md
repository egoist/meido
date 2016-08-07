# meido [![NPM version](https://img.shields.io/npm/v/meido.svg)](https://npmjs.com/package/meido) [![NPM downloads](https://img.shields.io/npm/dm/meido.svg)](https://npmjs.com/package/meido)

![meido](https://ooo.0o0.ooo/2016/06/30/577535e09ed7f.png)

## Install

```bash
$ npm install -g meido
```

## Usage

```bash
# serve current working directory
$ meido

# serve elsewhere
$ meido ./public

# serve and open the webpage
$ meido --open

# serve in different port
$ meido --port 4000

# help
$ meido --help
```

### What does meido stand for?

Obviously, `meido` is the prononciation of `メイド` in Japanese, which means `maid` in English.

### How is it different from tj/serve?

As how `meido` describes herself, more straight-forward and friendly.

## API

```js
import meido from 'meido'

meido(options, callback)
```

### options

#### port

Type: `number`<br>
Default: `3000`

#### dir

Type: `string`<br>
Default: `./`

The directory to serve.

#### open

> CLI only

Type: `boolean`<br>
Default: `false`

Open the webpage in browser after the server is established.

### callback

Type: `function`<br>
Args: `app` - Express server instance

Run the callback function after the server is established. You can get the server port by `app.get('port')`

## License

MIT © [EGOIST](https://github.com/egoist)

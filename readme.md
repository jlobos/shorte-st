# shorte-st

Shorten URLs using Shorte.st and earn money :moneybag:

## Install

```bash
$ npm install --save shorte-st
```

## Usage

```js
const short = require('shorte-st')

short({ token: 'token', url: 'https://www.google.com' })
.then(data => {
  console.log(data)
  // { status: 'ok', shortenedUrl: 'http://sh.st/MWg3X' }
})
```

## License

MIT

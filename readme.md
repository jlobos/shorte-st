# shorte-st

Shorten URLs using Shorte.st and earn money :moneybag:

```js
const Shorte = require('shorte-st')

const shorte = new Shorte('token')

shorte.short('https://www.google.com', (err, url) => {
  console.log(err, url)
})
```

## Installation

```
npm i shorte-st
```

## Testing

```
npm i
TOKEN='token' npm test
```

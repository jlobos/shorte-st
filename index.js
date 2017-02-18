const fetch = require('node-fetch')

module.exports = ({ token, url }) => {
  return new Promise((resolve, reject) => {
    fetch('https://api.shorte.st/v1/data/url', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'public-api-token': token
      },
      body: `urlToShorten=${url}`
    }).then(res => {
      if (res.status !== 200) {
        return reject('Error occurred in fetch API')
      }

      res.json().then(data => resolve(data))
    })
  })
}

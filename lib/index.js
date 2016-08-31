
const request = require('request')

class Shorte {
  constructor (token) {
    if (!token) throw new Error('token is required')
    this.token = token
  }

  short (link, callback) {
    request({
      url: 'https://api.shorte.st/v1/data/url',
      method: 'PUT',
      headers: {
        'accept': '*/*',
        'Content-Type': 'application/x-www-form-urlencoded',
        'public-api-token': this.token
      },
      body: `urlToShorten=${link}`
    }, (error, response, body) => {
      callback(error || (response.statusCode !== 200), JSON.parse(body))
    })
  }
}

module.exports = Shorte

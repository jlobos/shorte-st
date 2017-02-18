
import test from 'ava'
import Shorte from '../lib/index'

const shorte = new Shorte(process.env.TOKEN)

test.cb('short', t => {
  shorte.short('google.com', (e, r) => {
    t.falsy(e)
    t.is(typeof r, 'object')
    t.end()
  })
})

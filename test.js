import test from 'ava'
import short from './index'

test('short', async t => {
  const {
    status,
    shortenedUrl
  } = await short({ token: 'b6705b3c12ac040e44b33d1a40d83731', url: 'https://www.google.com' })

  t.is(status, 'ok')
  t.is(shortenedUrl, 'http://sh.st/MWg3X')
})

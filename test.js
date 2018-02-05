const test = require('tape')
const titleCase = require('.')

test('titleCase', function (t) {
  const patterns = [
    ['this is a test', 'This Is a Test'],
    ['why sunless tanning is A hot trend', 'Why Sunless Tanning Is a Hot Trend'],
    ['Satin Sheets are a Luxury you Can Afford', 'Satin Sheets Are a Luxury You Can Afford'],
    ['the Dangers Of Hiking Without Proper Shoes', 'The Dangers of Hiking Without Proper Shoes'],
    ['an hour or so', 'An Hour or So'],
    ['Of the meaning Of Of', 'Of the Meaning of Of'],
    ['Thing With     Extra Spaces', 'Thing With Extra Spaces'],
    ['iphone, ipad, imac, ipod, and ihome stolen from apple store', 'iPhone, iPad, iMac, iPod, and iHome Stolen From Apple Store'],
    ['$500 stolen in strong-arm robbery', '$500 Stolen in Strong-Arm Robbery'],
    ['semi-automatic pistol found in dumpster', 'Semi-Automatic Pistol Found in Dumpster']
  ]

  patterns.forEach(pattern => {
    t.equal(titleCase(pattern[0]), pattern[1], pattern[1])
  })
  t.end()
})

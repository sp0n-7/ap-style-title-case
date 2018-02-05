const stopwords = 'a an and at but by for in nor of on or so the to up yet'.split(' ')
const iDevices = 'iphone ipad imac ipod ihome'.split(' ')

function titleCase (str) {
  if (!str) return null
  if (!str.length) return null
  var words = str.split(/\s+/)

  return words
    .map((word, index) => {
      
      if (word.includes('-')) return word.split('-').map(capitalize).join('-')
      if (iDevices.includes(word.toLowerCase().replace(',',''))) return iCapitalize(word)
      if (index === 0) return capitalize(word)

      if (index === words.length - 1) return capitalize(word)
      if (stopwords.includes(word.toLowerCase())) return word.toLowerCase()
      return capitalize(word)
    })
    .join(' ')
}

function capitalize (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

function iCapitalize (str) {
  return str.slice(0,1) + str.charAt(1).toUpperCase() + str.slice(2)
}

module.exports = titleCase

const fs = require('fs');

module.exports = function (file, separator = '\n') {
  return new Promise((res, rej) => {
    fs.readFile(file, 'utf8', (err, data) => {
      const sequence = data.split(separator)
      res(sequence)
    })
  })
}
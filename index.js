var fs = require('fs');

/* READ TEXT FILE */
var dataset = fs
  .readFileSync('./data/negative_wordlist.txt')
  .toString()
  .split('\n');

function isProfane(input) {
  if (dataset.includes(input.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}

module.exports = {
  isProfane,
  dataset,
};

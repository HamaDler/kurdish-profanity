const fs = require('fs');
const path = require('path');
const wordlist = fs
  .readFileSync(path.resolve(__dirname, './dataset.txt'))
  .toString()
  .split('\n');

const getWordlist = () => {
  return wordlist;
};

// Function that checks if a word is profane
const isProfane = (input) => {
  if (getWordlist().includes(input.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

module.exports = { getWordlist, isProfane };

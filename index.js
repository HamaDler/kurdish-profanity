/* 
- read text file and store in array
- loop through array and check if input is in array
- export dataset and a function that tests an input against the dataset and returns boolean

*/

var fs = require('fs');

/* READ TEXT FILE */
var dataset = fs
  .readFileSync('./data/negative_wordlist.txt')
  .toString()
  .split('\n');
// for (i in dataset) {
//   console.log(dataset[i]);
// }

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

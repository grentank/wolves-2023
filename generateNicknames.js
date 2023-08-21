const {
  uniqueNamesGenerator, colors, starWars, animals,
} = require('unique-names-generator');
const writeNames = require('./wirteNames');

function generateNicknames(amount) {
  const array = [];
  for (let index = 0; index < amount; index++) {
    const myName = uniqueNamesGenerator({
      separator: ' ',
      dictionaries: [colors, starWars],
    });
    array.unshift(myName);
  }

  writeNames(array);
}

module.exports = generateNicknames;

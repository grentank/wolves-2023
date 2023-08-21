// const randomName = uniqueNamesGenerator(
// { dictionaries: [adjectives, colors, animals] }); // big_red_donkey

const generateNicknames = require('./generateNicknames');

// const shortName = uniqueNamesGenerator({
//   dictionaries: [adjectives, animals, colors], // colors can be omitted here as not used
//   length: 2,
// }); // big-donkey

// console.log(myName);

// generateNicknames(7);

function runFromArgv() {
  const value = Number(process.argv[2]);
  if (Number.isNaN(value)) throw new Error('Value must be a number');

  generateNicknames(value);
}

runFromArgv();

// console.log(1e30 + 1);

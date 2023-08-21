const fs = require('fs');

function writeNames(names) {
  const namesString = names.join('\n');

  fs.writeFileSync('./out2.txt', namesString, 'utf8');

  console.log('Finished');
  //   fs.writeFileSync('./out.txt', names[0], 'utf8');

//   for (let index = 1; index < names.length; index++) {
//     const oneName = names[index];
//     fs.appendFileSync('./out.txt', `\n${oneName}`, 'utf8');
//   }
}

module.exports = writeNames;

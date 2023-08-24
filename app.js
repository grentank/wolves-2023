// const personName = 'John "Unknown" Doe';
// personName[2] = 'a';
// const num = 29384;
// console.log(...num.toString());
// const a = ...personName;
// personName.

// const number = '8 495 676 89 32';
// const regex = /(?:8) (\d{3})\s(\d{3})\s(?:\d{2})\s(\d{2})/g
// console.log(number.replace(regex, '($1) $2-$3-$4'));

// const date = new Date();
// date.setFullYear(2022);
// console.log(date.getDay());

function eventTimeline(date) {
  const today = new Date();
  if (today > date) {
    const diff = today - date;
    const numberOfDays = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `Past: ${numberOfDays}`;
  }
  return 'Future';
}

// console.log(eventTimeline(new Date('2022-08-24')));
// console.log(new Date().valueOf());
// console.log(Date.parse(new Date()));
// console.log(Date.now());
console.log((new Date()).getMonth())
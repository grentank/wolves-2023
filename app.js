const names = [
  'Alex',
  'Bob',
  'Charlie',
  'Dave',
  'Eve',
  'Frank',
];

// Mutating methods

// const res = names.unshift('Gary');
// console.log(res);
// console.log(names);

// const res = names.pop();
// console.log(res);
// console.log(names);

// const res = names.push('Gary');
// console.log(res);

// const res = names.splice(2, 2);
// console.log(res);
// console.log(names);

// function removeName(name) {
//   const nameIndex = names.indexOf(name);
//   names.splice(nameIndex, 1);
// }

// removeName('Eve');
// console.log(names);

// const str = names.split('\n');
// console.log(str);

// const res = names.reverse();
// console.log(res);
// console.log(names);
// console.log(names.reverse() === names);

// Non-mutating methods

// const res = names.slice(2, 4);
// console.log(res);
// console.log(names);

// const res = names.concat(['Gary', 'Mary', 'John']);
// console.log(res);
// console.log(names);

// const res = names.toReversed();
// console.log(res);
// console.log(names);
// console.log(res === names);

// function nameIsShort(name) {
//     if(name.length >= 4) {
//         return false;
//     } else {
//         return true;
//     }
// }

// function nameIsShort(name) {
//   if (name.length >= 4) {
//     return false;
//   }
//   return true;
// }

// function nameIsShort(name) {
//   return name.length < 4;
// }

// const res = names.filter(nameIsShort);
// console.log(res);

// const res = names.filter((name) => name.length < 4);
// console.log(res);

const persons = names
  .map((name) => ({
    name,
    age: 15 + Math.floor(Math.random() * 10),
  }));
//   .filter((person) => person.age >= 18)
//   .map((person) => person.name);

// console.log(res);

// const res = persons.toSorted((person1, person2) => person2.age - person1.age);
// console.log(res);
// console.log(persons);

// const res = persons.reduce((acc, person) => acc + person.age, 0);
// console.log(res);

// const res = persons.reduce((acc, person) => {
//   if (person.age % 2 === 0) {
//     return { ...acc, even: acc.even + 1 };
//     // acc.even += 1;
//     // return acc;
//   }
//   //   acc.odd += 1;
//   //   return acc;
//   return { ...acc, odd: acc.odd + 1 };
// }, { odd: 0, even: 0 });

// console.log(persons);
// console.log(res);

// function myFind(arr, callback) {
//   for (let index = 0; index < arr.length; index++) {
//     if (callback(arr[index])) {
//     }
//   }
// }

// myFind(persons, (person) => )

// persons.forEach((el, index, array) => {

// })

// console.log(persons);

// SHALLOW COPYING

// const newNames = names.slice();
// const newNames = names.map((el) => el);
// const newNames = [...names];
// const newNames = names.toReversed().toReversed();
// newNames[2] = 'JOHN TRAVOLTA';
// console.log(newNames);
// console.log(names);
// console.log(names === newNames);

// DEEP COPYING

const newPersons = JSON.parse(JSON.stringify(persons));
// В 20 Node добавили новый способ глубокого копирования -- попробуйте найти
newPersons[2].name = 'JOHN TRAVOLTA';
console.log(newPersons);
console.log(persons);
console.log(newPersons === persons);

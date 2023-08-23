// function sumToN(n) {
// //   let sum = 0;
//   const numbers = [];
//   for (let i = 0; i <= n; i++) {
//     numbers.push(i);
//   }
//   return numbers.reduce((acc, cur) => acc + cur);
// }

// console.log(sumToN(5));

function sum(n) {
  if (n <= 0) return 0;
  return sum(n - 1) + n;
}

sum(1e6);

// coding challenge 2024
// challenge 2
// https://www.codewars.com/kata/5a00e05cc374cb34d100000d

// const reverseSeq = n => {
//     let result = [];

//     for (let i = n; i >= 1; i--) {
//         result.push(i)
//     }

//     return result;
// };

// const reverseSeq = n => [...Array(n)].map((el, i) => i + 1).reverse();

// const reverseSeq = n => Array(n).fill().map((el, i) => i + 1).reverse();

const reverseSeq = n => [...Array(n)].map((el, i) => n - i);

// const reverseSeq = length => Array.from({length}, () => length--)

console.log(reverseSeq(5));
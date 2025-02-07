// coding challenge 2024
// challenge 15
// https://www.codewars.com/kata/576b93db1129fcf2200001e6

// function sumArray(array) {
//     if(array == null || array.length <= 2) return 0;
//     const sorted = array.sort((a,b) => a - b)
//     let result = 0
//     for(i = 1; i < array.length - 1; i++){
//         result += sorted[i];
//     }
//     return result;
// }

// function sumArray(array) {
//     if (array == null || array.length <= 2) return 0;
//     return array.sort((a, b) => a - b)
//         .slice(1, -1)
//         .reduce((acc, curr) => acc + curr);
// }

const sumArray = (array) => array == null || array.length <= 2 ? 0 : array.sort((a, b) => a - b).slice(1, -1).reduce((acc, curr) => acc + curr);

console.log(sumArray([10, 9, 8, 7, 6, 5]))
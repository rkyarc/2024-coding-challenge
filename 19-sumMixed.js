// coding challenge 2024
// challenge 19
// https://www.codewars.com/kata/57eaeb9578748ff92a000009

// function sumMix(x){
//     let total = 0;
//     for(let i = 0; i < x.length; i++){
//         total += +x[i]
//     }
//     return total
// }

// function sumMix(x){
//     return x.reduce((acc,curr) => acc + +curr,0)
// }

const sumMix = (x) => x.reduce((acc,curr) => acc + +curr,0)

console.log(sumMix([9, 3, '7', '3']))
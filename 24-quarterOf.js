// coding challenge 2024
// challenge 24
// https://www.codewars.com/kata/5ce9c1000bab0b001134f5af

// const quarterOf = (month) => {
//   if (month >= 1 && month <= 3)
//     return 1
//   if (month <= 6)
//     return 2
//   if (month <= 9)
//     return 3
//   if (month <= 12)
//     return 4
// }

// const quarterOf = (month) => {
//   return (month >= 1 && month <= 3) ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4
// }

// const quarterOf = (month) => (month >= 1 && month <= 3) ? 1 : month <= 6 ? 2 : month <= 9 ? 3 : 4

const quarterOf = (month) => Math.ceil(month / 3)

console.log(quarterOf(3))
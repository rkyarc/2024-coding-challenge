// coding challenge 2024
// challenge 3
// https://www.codewars.com/kata/59ca8246d751df55cc00014c

// function hero(bullets, dragons){
//     if (bullets / 2 >= dragons) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function hero(bullets, dragons){
//     return bullets / 2 >= dragons;
// }

const hero = (bullets, dragons) => bullets / 2 >= dragons;

console.log(hero(10, 5));
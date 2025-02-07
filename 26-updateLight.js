// coding challenge 2024
// challenge 26
// https://www.codewars.com/kata/58649884a1659ed6cb000072

// function updateLight(current) {
//     if (current === 'green')
//         return 'yellow'
//     if (current === 'yellow')
//         return 'red'
//     if (current === 'red')
//         return 'green'
// }

// function updateLight(current) {
//     switch(current) {
//         case 'green' : return 'yellow'
//         case 'yellow' : return 'red'
//         case 'red' : return 'green'
//     }
// }

// function updateLight(current) {
//     return current === 'green' ? 'yellow' : current === 'yellow' ? 'red' : 'green'
// }

// const rules = {
//     green : 'yellow',
//     yellow : 'red',
//     red : 'green'
// }

// function updateLight(current) {
//     return rules[current]
// }

const updateLight = (current) => ({green : 'yellow', yellow : 'red', red : 'green'}[current])

console.log(updateLight("red"))
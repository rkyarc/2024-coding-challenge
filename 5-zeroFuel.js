// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     if(distanceToPump / mpg <= fuelLeft) {
//         return true
//     } else {
//         return false
//     }
// };

function zeroFuel(distanceToPump, mpg, fuelLeft) {
    return (distanceToPump > mpg * fuelLeft) ? false : true;
}

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return distanceToPump / mpg <= fuelLeft;
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return fuelLeft * mpg >= distanceToPump;
// };

// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump / mpg <= fuelLeft;

  console.log(zeroFuel(100, 50, 1));
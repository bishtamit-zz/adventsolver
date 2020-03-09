// Part 1

// common.js import
const { inputData, inputData2 } = require("./input1");

console.time("Perf");
// Input string to numbers
moduleMassArr = inputData2.split("\n").map(Number);
// console.log(moduleMassArr)

// Calculate fuel of module on mass
const fuelRequired = mass => {
  let fuelRequired = Math.floor(mass / 3) - 2;
  return fuelRequired;
};

// Takes total fuel required
const total = input =>
  input.map(fuelRequired).reduce((aggreagate, current) => {
    return aggreagate + current;
  }, 0);

const fuelFuel = fuel => {
  // if (fuel < 0) {
  //   return 0
  // } else {
  //   return fuel + fuelFuel(fuelRequired(fuelRequired))
  // }
  let fuelR = fuelRequired(fuel);
  if (fuelR < 0) {
    return 0;
  } else {
    return fuelR + fuelFuel(fuelR);
  }
};

moduleFuel = total(moduleMassArr);
console.log("module mass", moduleFuel);
// console.log("total mass for fuel", fuelFuel(moduleFuel));

// console.log(moduleFuel + fuelFuel(moduleFuel));
// console.log(3126794 + fuelFuel(3126794));

console.log(fuelFuel(moduleFuel) + moduleFuel);
console.timeEnd("Perf");

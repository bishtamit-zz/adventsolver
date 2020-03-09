const { input } = require("./input2");

const strToArr = arr => arr.split(",").map(Number);

let arr = strToArr(input);

const gravityGenerator = arr => {
  let valueComputed = false;
  for (let i = 0; i < arr.length; i += 4) {
    let op_code = arr[i];
    let fvalue_idx = arr[i + 1];
    let svalue_idx = arr[i + 2];
    let result_idx = arr[i + 3];
    var finalIndex = arr.length;
    if (arr[i] === 99) {
      i += finalIndex;
      return false;
    } else if (op_code === 1) {
      let result = arr[fvalue_idx] + arr[svalue_idx];
      arr[result_idx] = result;
      // console.log(result);
      if (result === 19690720) {
        return true;
      }
    } else if (op_code === 2) {
      let result = arr[fvalue_idx] * arr[svalue_idx];
      arr[result_idx] = result;
      // console.log(result);
      if (result === 19690720) {
        return true;
      }
    }
  }
  return valueComputed;
};

for (let noun = 0; noun < 100; noun++) {
  let done = false;
  for (let verb = 0; verb < 100; verb++) {
    workingOn = [...arr];
    workingOn[1] = noun;
    workingOn[2] = verb;
    done = gravityGenerator(workingOn);
    if (done) {
      let output = 100 * noun + verb;
      console.log("Final Output is", output, "with", noun, verb);
      break;
    }
  }
  if (done) {
    break;
  }
}
gravityGenerator(arr);
// resultArr = arr.slice(0, finalIndex);

// module.exports = { resultArr };

// Am!t@123

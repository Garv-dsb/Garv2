// Array Js Questions

// 1. Creating two dimensions array in JS
const twoDimensions = [
  [12, 12, 12],
  [12, 34, 12],
];

console.log(twoDimensions);

// 2 . Find the Maximum Elements in the Array
// For this We have many different ways to that - using for loop , with math function , reduce method
// we can do with basic Array For loop

const findMaxNum = [11, 22, 132, 234, 65, 12, 32, 45];

console.log(...findMaxNum);

// Using the Spread Operator
console.log(Math.max(...findMaxNum));

// using the for loop


const findMaxNumnew = [12,121,1121,132,13,13111,142,145,36,634234,22573,243414];

const findTheMax = (arr) => {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  console.log(max);
};

findTheMax(findMaxNumnew);
// functions are the named piece of block that is used to doing some work or perform some action , it takes some parameters and return some values based on their actions and parmeters pass

function checkMyAge(age) {
  if (age > 18) {
    return true;
  } else {
    confirm("I didn't know . be wait till You are 18");
  }
}

checkMyAge(18);

// function that returns least number from two numbers

function leastNumber(num1, num2) {
  return num1 > num2 ? num2 : num1;
}

console.log(leastNumber(2, 3));

// Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

let powResult = 0;

function pow(x, n) {
  for (let i = 1; i < n; i++) {
    if (i == 1) {
      powResult = powResult + x * x;
      continue;
    } else {
      powResult = powResult * x;
    }
  }
  return powResult;
}

console.log(pow(3, 2));

// Above code written is complex

// A another way to Create a function is using function expression
// Example :

let basicSum = function () {
  return a + b;
};

// a more another way to create the function is the arrow function

let newSumArrowSingle = (a, b) => a + b;

// curly braces open the one more line then it's the one more line and the multi line arrow function

let newSumArrow = (a, b) => {
  return a + b;
};

// above is more simple way of creating the function

// 1. Print “Hello, world” with a delay of 3 seconds

// SetTimout is the function that takes the callbackfn. and the delay

// OutPut

setTimeout(() => {
  console.log("Hello, World");
}, 3000); // run the 'Hello world !'  in 3 seconds

// --------------------------------------------------------------------------------------------

// 2. Create a function which receives a function as argument and executes it after 2 seconds

const display = () => {
  console.log("Hello i am callback function");
};

const showingData = (displayfunction) => {
  setTimeout(() => {
    displayfunction();
  }, 2000); // run the function in 2 seconds
};

showingData(display);

// --------------------------------------------------------------------------------------------

// 3. Print numbers from 1 to 10 with delay of 1 second between each value being printed

for (let i = 1; i <= 10; i++) {
  setTimeout(() => {
    console.log("After 1 seconds ", i);
  }, i * 1000);
}

// --------------------------------------------------------------------------------------------

// Print numbers from 1 to 10 with delay of 1 second between each value being printed using setInterval

function printNumbers() {
  let currentNumber = 1;

  const intervalId = setInterval(function () {
    console.log(currentNumber);
    if (currentNumber === 10) {
      clearInterval(intervalId);
    }
    currentNumber++;
  }, 1000);
}

printNumbers();

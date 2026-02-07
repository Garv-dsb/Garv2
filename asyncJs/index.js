// JavaScript is the synchronous by Nature : Synchronous means run the code one by one and if we running the code run by run then sometimes there is some code that occur like we have to wait for that to run may be there is a lot of time it occur to run that code .. might be too many time we have to run

// asynchronous code - Javascript is also asynchronous in nature . it asynchronous in nature with the help of the browser APIs or node js

// .. we have many steps in with the help of the JS run the code -

// call stack
// Browser API
// callback queue
//event loop

// setTimeout -

console.log(
  setTimeout(() => {
    console.log(setTimeout);
  }, 10000),
);

clearTimeout(1);

// Asynchronous code with some synchronous code

console.log("Hello Garv!");
console.log("Hello Naman");
// setInterval(() => {
//   console.log("Hello Nodejs");
// }, 10000);
console.log("Hello website");

// callbacks - callbacks are the functions that passes as a arguements to the other function
// they are used in the asynchronous programming to not block the main thread.

function fetchDataofParticularUser(userId, fetchData) {
  console.log(`start Fetching data of the  ${userId}`);

  setTimeout(() => {
    const userData = {
      name: "Garv Thakral",
      age: 21,
      address: {
        street: "ABC ZXY",
        landmark: "secure Data by Garv!",
      },
    };

    fetchData(userData);
  }, 2000);
}

const DisplayDataOfUser = (userData) => {
  return console.log(
    `Hello user , ${userData.name} and i know well Your age is ${userData.age} , ${userData.address.street}`,
  );
};

console.log(fetchDataofParticularUser(123121, DisplayDataOfUser));

console.log(
  "This is not wait for the function to run , and shows that i have data and data is already i have ",
);

// callbacks hell - callback hell is the situations where the nested callback functions inside the function create a hard to read the code .

// see the aboe example to read more cpmplex the things

// A callback pyramid we didn't know what's going on

// it's more complex and more time taking to read this callback

console.log(
  setTimeout(() => {
    console.log("1st callback");
    setTimeout(() => {
      console.log("2nd callback");
      setTimeout(() => {
        console.log("3rd callback");
        setTimeout(() => {
          console.log("4th callback");
          setTimeout(() => {
            console.log("5th callback");
            setTimeout(() => {
              console.log("6th callback");
              setTimeout(() => {
                console.log("7th callback");
                setTimeout(() => {
                  console.log("8th callback");
                  setTimeout(() => {
                    console.log("9th callback");
                    setTimeout(() => {
                      console.log("10th callback");
                    }, 10000);
                  }, 9000);
                }, 8000);
              }, 7000);
            }, 6000);
          }, 5000);
        }, 4000);
      }, 3000);
    }, 2000);
  }),
  1000,
);

// we can overcome of the callback hell with the help of the Promises ( .then() method ) and also with the help of the , async / await , modularization ( breaking down the things into the parts , sub parts )

// promises - Promises is like that run the code and return the states that will tell i will fulfiled the code , i didn't execture ( pending ) , i will failes to execute thr code (failed)

// How to create a promise

// with the help of the constructor

const promise = new Promise((resolve, reject) => {
  let data = 100;

  if (data === 10) {
    resolve("Yes the promise resolve");
  } else {
    reject(new Error("No! , the promise is rejected , you did wrong"));
  }
});

promise.then((result) => {
  console.log("yes the promise is fullfiled with the result is :", result);
});

promise.catch((error) => {
  console.log("No the promise is not fullfiled with the error is :", error);
});



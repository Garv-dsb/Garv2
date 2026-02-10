// // ###  1. **Simulate an API call with delay**

// // **Problem:** Write a function `fakeFetch()` that returns a promise and resolves after a random time (1-3 sec) with a success message or rejects with an error (20% chance).
// // **Objective:** Practice `new Promise`, `setTimeout`, and error handling.

// // Summary

// const fakeFetch = () => {
//   const promise = new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 3 + 1);

//     setTimeout(() => {
//       const chancesToFail = Math.floor(Math.random() * 100);
//       if (chancesToFail <= 20) {
//         // error with 20% chances
//         reject("Error to fetch");
//       } else {
//         // else it's success in most cases
//         resolve("success");
//       }
//     }, delay * 1000);
//   });

//   promise
//     .then((res) => {
//       console.log(res);
//     })
//     .catch((err) => console.log(err));

//   return promise;
// };

// fakeFetch();

// // ----------------------------------------------------------------------------------

// // ###  2. **Retry until success**

// // **Problem:** Using the `fakeFetch(url)` from above, write `retryUntilSuccess(maxTries)` that keeps retrying the call until it succeeds or max tries are exhausted.
// // **Objective:** Loop with async/await, retry logic.

// const retryUntilSuccess = async (maxTries) => {
//   let successMessage = "success";

//   for (let i = 0; i < maxTries; i++) {
//     let res = await fakeFetch();

//     if (res === successMessage) {
//       console.log(res); // retrying the call until it succeeds or max tries are exhausted.
//       break;
//     }
//   }
// };

// retryUntilSuccess(5);

// // ----------------------------------------------------------------------------------

// // ###  3. **Run multiple async tasks concurrently and wait for all**

// // **Problem:** Create 3 fetch functions simulating API calls and use `Promise.all()` to wait for them.
// // **Bonus:** Handle the case where one fails — use `Promise.allSettled()`.

// const fetch1 = new Promise((resolve) =>
//   setTimeout(() => resolve("Resolved"), 1000),
// );

// const fetch2 = new Promise((reject) =>
//   setTimeout(() => reject("Rejected"), 2000),
// );

// const fetch3 = new Promise((resolve) =>
//   setTimeout(() => resolve("Resolved"), 1000),
// );

// Promise.all([fetch1, fetch2, fetch3]).then((res) => {
//   console.log(res);
// });

// // ----------------------------------------------------------------------------------

// // #  4. **First to respond wins**

// // **Problem:** You have two redundant APIs. Use `Promise.race()` to respond with whichever fetch responds first.

// // **Objective:** Race conditions, fail-fast strategy.

// const promise1 = new Promise(
//   (resolve) => setTimeout(() => resolve("Resolved 1"), 1000), // it will run in 1 second
// );

// const promise2 = new Promise(
//   (resolve) => setTimeout(() => resolve("Resolved 2"), 2000), // it will run in 2 second
// );

// Promise.race([promise1, promise2]).then((res) => {
//   console.log(res);
// });

// // ----------------------------------------------------------------------------------

// // ###  5. **Sequential execution with delay**

// // **Problem:** Given an array of messages, log each one with a 1-second delay between them.

// const oneSecondDelayMessage = async (arrayData) => {
//   for (let i = 0; i < arrayData.length; i++) {
//     setTimeout(() => {
//       console.log(arrayData[i]);
//     }, i * 1000);
//   }
// };

// oneSecondDelayMessage(["Hello", "World", "Async", "Rocks"]);

// // ----------------------------------------------------------------------------------

// // ###  6. **Parallel with limit (Concurrency control)**

// // **Problem:** Implement a function that takes an array of async tasks and a concurrency limit, and runs at most `N` at a time.
// // Example: 10 tasks, 3 at a time.
// // **Objective:** Queue processing, advanced async handling.

// const queueProcessing = (tasks, N) => {};
// // ---------------------------------------------------------------------------------------

// // ###  7. **Waterfall / Dependency chaining**

// // **Problem:** Given an array of functions that return promises, execute them in sequence passing the result of one to the next.

// // **Objective:** Promise chaining manually.

// // ------------------------------------------------------------------

// function func1() {
//   return Promise.resolve(10);
// }

// function func2(prevousResult1) {
//   return Promise.resolve(prevousResult1 * 12);
// }

// function func3(prevousResult2) {
//   return Promise.resolve(prevousResult2 * 121);
// }

// func1()
//   .then(() => {
//     console.log(data);
//   })
//   .then(() => {});

//   ###  10. **Create a polling function**

// **Problem:** Write `poll(fn, interval, maxTries)` that repeatedly calls an async function every interval until a success condition is met or tries are exhausted.
// **Objective:** Intervals + async/await

// const checkSuccess = () => {
//   const randomSucces = Math.random * 10 + 1;

//   const promise = new Promise((resolve, reject) => {
//     if (randomSucces < 9) {
//       resolve("success");
//     } else {
//       reject("not success");
//     }
//   });

//   return promise;
// };

// const poll = async (checkSuccess, interval, maxTries) => {
//   const data = await checkSuccess();
//   data.then((res) => {
//     console.log(res);
//   });
// };

// poll(checkSuccess);

// Q.14  Promise.all preserve Tasks - they are in same order they are came if they return promise in different time doen't matter

const order1 = new Promise((resolve) =>
  setTimeout(() => resolve("order 1"), 1000),
);

const order2 = new Promise((reject) =>
  setTimeout(() => reject("order 2"), 5000),
);

const order3 = new Promise((resolve) =>
  setTimeout(() => resolve("order 3"), 1000),
);

// Promise.all preserve the order in which they are created

Promise.all([order1, order2, order3]).then((res) => {
  console.log(res);
});

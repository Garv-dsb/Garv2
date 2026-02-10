// // Level 1: Promises — “Learning to Tame the Beast”
// //  The Sleepy Robot :- Write a function sleep(ms) that returns a Promise which resolves after ms milliseconds.

// // Solving
// const sleep = (ms) => {
//   console.log("Robot waking up...");
//   console.log(`(wait ${String(ms)[0]} seconds)`);

//   const promise = new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Robot awake 🤖");
//     }, ms);
//   });

//   return promise;
// };

// sleep(2000).then((res) => {
//   console.log(res);
// });

// // "Robot waking up..."
// // (wait 2 seconds)
// // "Robot awake 🤖

// // "Hint: Look at setTimeout + new Promise

// // ----------------------------------------------------------------------------------------------------
// // 2. Coin Toss Simulator
// // Create a function flipCoin() that:
// // Resolves with "Heads" or "Tails"
// // Rejects 20% of the time with "Coin fell under the couch"Goal:
// //  Handle both success and failure cleanly.

// function flipCoin() {
//   const headTailChoice = Math.floor(Math.random() * 2);
//   const twentyTimeRejects = Math.floor(Math.random() * 100);

//   const promise = new Promise((resolve, rejects) => {
//     if (twentyTimeRejects <= 20) {
//       rejects("Coin fell under the couch");
//     } else {
//       if (headTailChoice === 0) {
//         resolve("Head");
//       } else {
//         resolve("tail");
//       }
//     }
//   });

//   return promise;
// }

// flipCoin().then((res) => {
//   console.log(res);
// });

// // Hint: Math.random() is chaos—embrace it.

// // ----------------------------------------------------------------------------------------------------

// // 3.  Promise Chain Reaction
// // You’re given three async tasks:
// // downloadFile() - compressFile() - uploadFile() Each returns a Promise

// function downloadFile() {
//   return Promise.resolve("Downloading the file");
// }

// function compressFile(downloadedData) {
//   return Promise.resolve(
//     `first , ${downloadedData} --> then Compress the downloaded file`,
//   );
// }

// function uploadFile(compressedData) {
//   return Promise.resolve(
//     `${compressedData} ----> after this compress the result!`,
//   );
// }

// downloadFile()
//   .then((res) => compressFile(res))
//   .then((res) => uploadFile(res))
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));

// // Goal: Run them in order, passing the result of one into the next.
// // Hint: Return the next Promise inside .then().

// // ----------------------------------------------------------------------------------------------------

// // Level 2: async / await — “Same Power, Fewer Headaches”
// //  The Coffee Machine
// // Create an async function makeCoffee() that:
// // Waits for boilWater()
// // Waits for brewCoffee()

// const boilWater = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Water is boiling !");
//   }, 10000);
// });

// const brewCoffee = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("coffee is brewing!");
//   }, 15000);
// });

// const makeCoffee = async () => {
//   try {
//     await boilWater.then((res) => {
//       console.log(res);
//     });
//     await brewCoffee.then((res) => {
//       console.log(res);
//     });

//     console.log("Coffee is ready ☕");
//   } catch (error) {
//     console.log("error during making coffee", error);
//   }
// };

// makeCoffee();

// // Logs "Coffee is ready ☕"
// // Twist:If boiling fails, handle it gracefully.
// // Hint:Wrap awaits in a try/catch.

// // ----------------------------------------------------------------------------------------------------

// // 5. Fake API Fetch
// // Create a function fakeFetch(url) that:

// // Resolves with { data: "Some data from " + url }
// // Rejects if the URL contains "error"

// async function fakeFetch(url) {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching from: ${url}...`);

//     setTimeout(() => {
//       if (url.includes("error")) {
//         reject(`Error: Failed to fetch from ${url}`);
//       } else {
//         resolve({
//           data: "Some data from " + url,
//           status: 200,
//         });
//       }
//     }, 1000);
//   });
// }

// async function runDemo() {
//   try {
//     const result1 = await fakeFetch("https://garv.com/data");
//     console.log("Success:", result1.data);

//     const result2 = await fakeFetch("https://garv.com/error-page");
//     console.log("Success:", result2.data);
//   } catch (error) {
//     console.error("Caught expected error:", error);
//   }
// }

// runDemo();

// // Goal: Use async/await to fetch from three URLs sequentially.
// // Hint:One await at a time. No loops yet
// // ----------------------------------------------------------------------------------------------------

// // 6 The Mood Checker
// // Create checkMood() which:
// // Waits 1 second
// // Randomly resolves with "Happy", "Sad", or "Sleepy"Goal:
// //  Call it and

// const checkMood = () => {
//   const randomCheck = Math.floor(Math.random() * 3);

//   const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (randomCheck === 0) {
//         resolve("Happy");
//       } else if (randomCheck === 1) {
//         resolve("Sad");
//       } else {
//         resolve("Sleepy");
//       }
//     }, 1000);
//   });

//   return promise;
// };

// checkMood().then((res) => {
//   console.log(`Cuurent mood is: ${res}`);
// });

// // log: - "Current mood is: Happy 😄
// // "Hint: Async functions always return Promises—even if you forget.

// // ----------------------------------------------------------------------------------------------------

// // Level 3: Parallel vs Sequential — “Speed Matters”
// //  7 The Restaurant Orders
// // You have three
// // functions: cookBurger - cookPizza - cookSushi Each takes a different amount of time.

// const cookBurger = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Burger is Cooking");
//   }, 1000);
// });

// const cookPizza = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Pizza is Cooking");
//   }, 4000);
// });

// const cookSushi = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Sushi is Cooking");
//   }, 9000);
// });

// Promise.all([cookBurger, cookPizza, cookSushi]).then((res) => {
//   console.log(res);
// });

// // Goal:Serve all dishes as fast as possible.
// // Hint: Think: “run together, wait once.”

// // ----------------------------------------------------------------------------------------------------

// // 8 Loading Screen Simulator
// // Show this sequence:

// // Loading user...
// // Loading posts...
// // Loading comments...
// // All data loaded ✅

// const LoadUser = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Loading user...");
//   }, 1000);
// });

// const LoadPosts = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Loading posts...");
//   }, 5000);
// });

// const LoadComments = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Loading Comments...");
//   }, 8000);
// });

// Promise.all([LoadUser, LoadPosts, LoadComments]).then((res) => {
//   console.log(res);
//   console.log("All data loaded ✅");
// });

// Twist: User, posts, and comments should load in parallel.

// Hint: There’s a Promise method that loves arrays.

// ----------------------------------------------------------------------------------------------------

// Level 4: Error Handling & Control Flow

// 9 The Retry Button
// Create unstableTask() that fails randomly.

function unstableTask() {
  const randomFail = Math.random() * 100;

  const promise = new Promise((resolve, reject) => {
    if (randomFail <= 50) {
      resolve("success");
    } else {
      reject("Error fail Task");
    }
  });

  return promise;
}

const checktask = async () => {
  for (let i = 0; i < 3; i++) {
    try {
      const result = await unstableTask();
      if (result === "success") {
        console.log("The loop breaks", result);
        break;
      }
    } catch (error) {
      console.log("There is an error", error);
    }
  }
};

checktask();

// Goal:Retry it up to 3 times before giving up.
// Hint:Loops + try/catch can be friends.

// ----------------------------------------------------------------------------------------------------

// 10 Timeout or Bust
// Create fetchWithTimeout(promise, ms)

// function fetchWithTimeout(promise, ms) {
//   const timeOut = new Promise((reject) => {
//     setTimeout(() => {
//       reject(new Error("Api timeout ! can't run more"));
//     }, ms);
//   });

//   return Promise.race([promise, timeOut]);
// }

// const slowSpeedApi = new Promise((resolve) =>
//   setTimeout(() => resolve(" API Success Working!"), 5000),
// );

// fetchWithTimeout(slowSpeedApi, 1000).then(console.log).catch(console.log);

// // that:
// // Resolves if the promise finishes in time
// // Rejects if it takes too long

// // Hint: You’ll need two Promises racing each other.

// // ----------------------------------------------------------------------------------------------------
// // 11 Async Map Create a function asyncMap(array, asyncCallback)

// // that:Applies asyncCallback to each itemReturns a Promise with all results
// // Hint:Regular .map() doesn’t await

// const items = [1, 2, 3];

// const asyncTask = async (item) => {
//   await new Promise((resolve) => setTimeout(resolve, 1000));
//   return item * 2;
// };

// const asyncMap = async (array, asyncCallback) => {
//   const promises = array.map(asyncCallback);

//   const resolvedResults = await Promise.all(promises);

//   console.log(resolvedResults);
// };

// asyncMap(items, asyncTask);

// // ---------------------------------------------------------------

// // Cancel the Mission
// // Create a cancellable async operation.

// // create the abort function
// const controller = new AbortController();
// const signal = controller.signal;

// function cancel() {
//   controller.abort();
// }

// function fetchData(url) {
//   fetch(url, { signal })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((err) => {
//       if (err.name === "AbortError") {
//         console.log("Fetch request was aborted");
//       } else {
//         console.error("An error occurred:", err);
//       }
//     });
// }

// cancel();
// fetchData("https://jsonplaceholder.typicode.com/todos/1");

// // Goal:If cancel() is called before completion, the Promise should reject.

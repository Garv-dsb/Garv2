// Example of callback hell and the promises that resolve

// function that take a ( callback function )  and return the ingredients
// A SetTImeout function that takes time to get the Ingredients and a function

function getIngredients(callback) {
  console.log("1. Getting ingredients from the store...");
  setTimeout(() => {
    const ingredients = ["buns", "patty", "lettuce", "tomato"];
    console.log("...Ingredients ready");
    callback(null, ingredients);
  }, 1000);
}

function cookPatty(ingredients, callback) {
  console.log("2. Cooking the patty...");
  setTimeout(() => {
    const cookedPatty = `cooked ${ingredients[1]}`;
    console.log("...Patty cooked");
    callback(null, cookedPatty);
  }, 1500);
}

function assembleBurger(cookedPatty, callback) {
  console.log("3. Assembling the burger...");
  setTimeout(() => {
    const burger = `Burger with ${cookedPatty}, buns, lettuce, and tomato`;
    console.log("...Burger assembled");
    callback(null, burger);
  }, 500);
}

function serveBurger(burger, callback) {
  console.log("4. Serving the burger...");
  setTimeout(() => {
    console.log(`...Burger served: ${burger}`);
    callback(null);
  }, 300);
}

// A callback Hell - callback hell is the pyramid of doom
// Here we get a function with the getIngredients that take two arguements

getIngredients((err, ingredients) => {
  if (err) {
    console.error("Error in getting ingredients:", err);
    return;
  }
  cookPatty(ingredients, (err, cookedPatty) => {
    if (err) {
      console.error("Error in cooking patty:", err);
      return;
    }
    assembleBurger(cookedPatty, (err, burger) => {
      if (err) {
        console.error("Error in assembling burger:", err);
        return;
      }
      serveBurger(burger, (err) => {
        if (err) {
          console.error("Error in serving burger:", err);
          return;
        }
        console.log("Order complete! Enjoy your meal.");
      });
    });
  });
});

// Example of the Promises Chain ---

const data = fetch("https://dummyjson.com/posts");

// promises chain  - every .then() methods returns the promises - promises is fulfilled then the .then method run and one .catch block for all the promises and the method that will return the error if there is any error

data
  .then((res) => console.log(res))
  .then(() => fetch("https://jsonplaceholder.typicode.com/todos"))
  .then((res) => console.log(res))
  .catch((error) => console.log(error)); // if any error occur it will be print

// async and await in the javascript

// async - async keyword is used a function asynchronous - that always return the promises

const getData = async () => {
  const userData = await fetch("https://jsonplaceholder.typicode.com/todos");
  console.log("The user data comes first:", userData);
  console.log("Hello this is run after the code get the api data ");
};

getData();

// Promises API - Promisess API have six static method

// 1. Promises.all () method take the iterable of objects such as the array , Map or the set()

let urls = [
  "https://fakestoreapi.com/products",
  "https://reqres.in/",
  "https://fakestoreapi.com/products",
];

const resultAPIs = urls.map((url) => fetch(url));

Promise.all(resultAPIs).then((data) => {
  console.log(data);
});

// Return the first those get settled first and return the value

Promise.race(resultAPIs).then((data) => {
  console.log(data);
});

Promise.any(resultAPIs).then((data) => {
  console.log(data);
});

// Another Example of the Promise.race()

const firstSetTimOut = new Promise((resolve) =>
  setTimeout(() => resolve("I am first"), 1000),
);

const SecondSetTimOut = new Promise((resolve) =>
  setTimeout(() => resolve("I am Second"), 5000),
);

// It prints the first that is settled the first dsta

Promise.race([firstSetTimOut, SecondSetTimOut]).then((data) => {
  console.log(data);
});

const promiseWithResolver = () => {
  const { promise, resolve } = Promise.withResolvers();

  console.log(Promise.resolve());
};

promiseWithResolver();

// Use cases of the async / await

// async - async is the keyword is used where we want to make the function asynchronous - that this is the async function and can wait for that and we can run the asynchronous tasks

// await - await is also the keywoard where this is used to make a task wait for this to run and then run others

const awaitFunction = async (fetchUser) => {
  // wait for fetch the user then print the details of the user

  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => {
      console.log(res);
    },
  );

  console.log("User is fetched then Print the Details:");
};

const fetchUser = (user) => {
  console.log(
    "The user name is ",
    user.name,
    "and the age of the user is ",
    user.age,
    "The address od the user is :",
    user["address"],
  );
};

awaitFunction(fetchUser);

// How the async / await overcome the Promises chain

const fetchMultipleData = async () => {
  const data = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => {
      console.log("Multiple Post Data", multiplePostData);
    },
  );
  const singlePostData = await fetch(
    "https://jsonplaceholder.typicode.com/posts/1",
  );
  console.log("Single Post Data ", singlePostData);
};

fetchMultipleData();

// set are the collections of values ( ordered collection of values )

// set is the values of unordered items of list of different data

// create the set with the help of the set constructor

const set = new Set();

// adding the values to the set

set.add(1);
set.add(1); // we write here the 1 twice but we get the value once
set.add({
  name: "Garv",
});
set.add([
  1,
  2,
  "Hello",
  {
    age: 21,
  },
]);
set.add(function greet() {
  console.log("this is the function !");
});

console.log(set); // if we console the empty set , then we get the Map(0);

// Iteration over the Set data

// with the help of the for .. of loop

for (let dataSet of set) {
  console.log("The data of the set is:", dataSet);
}

// with the help of the forEach()

set.forEach((dataSet) => {
  console.log("The data of the set is:", dataSet);
});

console.log(set.delete(1)); // return true because we delete the value 1

// set.has(value) – returns true if the value exists in the set, otherwise false.

console.log(set.has(1)); // returns false because we delete the value 1 already so the property doesn't exsist

// clear() method clear all the data in the set

set.clear();
console.log(set); // empty set

const map = new Map();
console.log(typeof set);
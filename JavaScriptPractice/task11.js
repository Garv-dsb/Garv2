// Array : Array  is the Non primitive data type in the Js .
// it's the type of the object in the Js
// They can store the different type of Data Elements in the Array

// Can be created using the square brackets

let arr = ["garv", 21, "ABC SZX"];

// The array elements are indexed start from the zero to the length - 1

console.log(arr); // this will print the array element with the index

// How to Access The array Elements - with the help of the Numbers ( index )

console.log(arr[0]); // "Garv "
console.log(arr[1]); // 21
console.log(arr[2]); // "ABC SZX"

// The above code is described how we can access the Array elements in the JavaScript with the indexes

// Changing the Array Elements with the help of the index

arr[0] = "garv Thakral";

console.log("The updated Value of the New Array Element:", arr[0]);

// The array is also a type of object if we console the type of the object then it's be the object

console.log(typeof arr); // object

// We can access the elements in Array with the number (index) and in the object with the help of the (names)

// We can also add the array elements as the object

const UserData = [
  {
    userName: "Garv Thakral",
    age: 21,
  },
  {
    userName: "Garv Thakral",
    age: 21,
  },
  {
    userName: "Garv Thakral",
    age: 21,
  },
];

// the Above data is the JSON format that is the Array of the object

// MEthods and the Properties of the Array

// Properties : Properties are the attributes and data that  describes the state
// Method : Method are the Functions that perform some actions

// Lets see the Properties :- Length

let numArr = [1, 2, 3, 12, 23, 1, 1, 432, 132];

console.log(numArr.length);

// Accessing the Elements using the Array Length

console.log(numArr[numArr.length - 1]);

// To iterate over the Each Element of the Array we can use the 'For' Loops. basically

for (let i = 0; i < numArr.length; i++) {
  console.log(
    "The Array Element of the numArr after the for loop applying :",
    numArr[i],
  );
}

// Another way to iterate over each element of the Array is the forEach() method:

numArr.forEach((arr) => {
  console.log(
    "The value of the Array Elements after iterating using For Each :",
    arr,
  );
});

// Arrays Methods - Array methods are categorized in the two ways that are the given below that is the

// Static nd instance methods

// static methods - Static methods are the methods that is the apply on the basically with on Array Constructor
// Instance methods - Instance Methods are the methods that are apply on the Array But it's return a new array or modified new Array

// Array.from() method

console.log(Array.from("Garv"));

//  Array.fromasync() method : - basically it's used to iterate for the asyncgh iterable , synchronous iterable

// Array.isArray()

console.log(Array.isArray(["1", "1"]));

// Array.of() - creates the Array from the given number of the Array Arguements passed

console.log(Array.of("12", "1234", "1231"));

// Instance Methods - push() ,

// push() is used to push a element to the end of the array

console.log(numArr.push(123));

// sort() is the method that is used to sort the given array

console.log(numArr.sort());

// pop() is the method that is used to pop the last element
console.log(numArr.pop());

// shift()
console.log(numArr.unshift(12311));

console.log(numArr);

// Array Search Methods :- indexOf() , lastIndexOf() ,  includes()

const numArrayNew = [1, 2, 3, 4, 1, 2, 54, 56, 32, 76, 321];

console.log(numArrayNew.indexOf(54)); // return the first occurence index of element

console.log(numArrayNew.lastIndexOf(2)); // return the last occurence index of element

console.log(numArrayNew.includes(32)); // return true if the element is present in the Array

numArrayNew.find((val) => {
  console.log(val > 18 ? val : ""); // find function return the elements that passes the test functions
});

numArrayNew.findIndex((val) => {
  console.log(val > 18 ? val : ""); // find Index function return the index of the element that passes the test function
});

// Same findLast start from the last and return the value of the element that satisfy the condition

numArrayNew.findLast((val) => {
  console.log(val > 18 ? val : "");
});

// Array Sort Method - Array Sort Method that is used to sort the array elements
// --> There are different Array Elements that are present

// Sort Method  - Sort method is used to sort the data based on the Alphabatically

const newAlphaBeticSort = ["Apple", "Banana", "kiwi", "Dragon Fruit"];

console.log(newAlphaBeticSort.sort()); // this will sort in the Alphaetic order

//  reverse() - this will  reverse the element of the Array Elements

// toSorted() - this array element is the sort method that is will create the sorted data but gives the new array , not change the original array

console.log(newAlphaBeticSort.toSorted());

// toReversed() is also created the new array not changed the previous array and anything

// sort method will give improper result for the number data

// we can sort the numbers with the help of the Numeric functions

// For sorting in the Random Order we can use the ( Math.Random() )

// Array Iteration Methods - Array Iterations Method that is forEach() , map() , flatmap() , filter() , reduce() , reduceRight() , every()

let data = [1, 2, 3, 4, 51];

console.log(data);

// Map Funtion - Map functions are the function that is used to iterate over each element of the array

let hello1 = [1, 2, 3, 4, 5, 6];

// create a new Array that is used to square each element of that array

const hello2 = hello1.map((data) => {
  return data * data;
});

console.log(hello2); // that is used to square roots of the element

// split and join  - they are used to split and join the words in the string to array

let message = "Aman , Garv , Naman";

let dataArr = message.split(" , ");

console.log(dataArr);


// Object iterations method - we use the object.keys , object.values , object.entries 

let userDataWithObject = {
  name : "Garv Thakral!",
  age : 21,
}

// object.keys 
console.log(Object.keys(userDataWithObject)); // it returns the array with the keys of the object

console.log(Object.values(userDataWithObject)); // it returns the array with the values in the object 

console.log(Object.entries(userDataWithObject)); // it returns the two array with the key and the Values


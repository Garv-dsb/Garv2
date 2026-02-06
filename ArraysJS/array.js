// Differences in Loops

// To iterate over the Array we have many methods like :

// forEach() , map() , filter() , reduce() and traditional methods(for , for..of , for.. in , while , do while)

// let arr = [1, "Garv", { name: "Garv", age: 21 }];
// console.log(arr);

// console.log(typeof arr); // is Object

// For in loop in array is baiscally the way to return the index . because it returns or run on  the
// OBject properties for the object it's properties are the indexes not the actual the properties

// for (let data in arr) {
//   return data;
// }

// console.log(arr);

// what happend if we run the for .. of Loop on the JavaScript object

// let newObject = { name: "Garv", age: 21 };

// for (let data of newObject) {
// //   console.log("data of the object: ", newObject);
// }

// Spread operator - represented by the ... dots and they are used for expanding the iterables into individual value

// const arr = [1, 2, 3, 4];
// console.log(arr);

// split method - split method is used

// let text = "hello";

// let data = text.split("");
// console.log(data);

const newSplit = (string, seprator) => {
  const storedData = [];
  let temp = "";

  if (seprator === "") {
    for (let i = 0; i < string.length; i++) {
      storedData.push(string[i]);
    }
    return storedData;
  }

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== seprator) {
      temp += string[i];
    } else {
      storedData.push(temp);
      temp = "";
    }
  }
  storedData.push(temp);

  return storedData;
};

// const newData = newSplit("This is Garv", " ");
const newData = newSplit("This-is-Garv", "-");

console.log(newData);

// Join Method - JOin method reverse back the array into string

const newArray = ["Garv", "Thakral"];
console.log(newArray.join(""));

const newJoin = (array, glue) => {
  let result = "";
  let temp = "";
  let length = array.length;

  for (let data of array) {
    temp += String(data);
    if (glue) {
      if (length - 1 === array.indexOf(data)) {
        // if the last element don't add glue
        temp;
      } else {
        temp += glue;
      }
    }
  }

  result += temp;

  return String(result);
};

const newData1 = newJoin(["banana", "Mango", "Apple"], ",");
console.log(newData1);

// Merging Arrays

// The Modern way is to Merging the arrays is the spread / rest operator - returns the new Array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [2, 3, 4, 1, 2, 1];
let arr3 = [1, "Hello"];

console.log([...arr1, ...arr2, ...arr3]); // it's just return not the store the variable into any other variable

let empty_array = [];
let data = 10;
console.log(empty_array.concat(data, arr2, arr1));

// Concat method does not works with the nested flattern data - for merging the nested Array also we can use the flat() method

let data1 = [
  1,
  [1, 2, [1, 2, 3, [3, 4, [5, 6, [7, 8, [9, 0, [1, 2, [34, [56]]]]]]]]],
];
// let data1 = [
//   [1, 2],
//   [2, 3],
// ];

const newDataArray = data1.flat(Infinity);
console.log(newDataArray);

// flatMap()

const phrases = ["Hello world", "JS is", "awesome"];

// Using map() gives nested arrays
const mapped = phrases.map((phrase) => phrase.split(" "));
console.log(mapped);
// [["Hello", "world"], ["JS", "is"], ["awesome"]]

// Using flatMap() flattens it automatically
const words = phrases.flatMap((phrase) => phrase.split(" "));
console.log(words);
// ["Hello", "world", "JS", "is", "awesome"]

// spread operator - spread operator is used in many ways - Basically the separator is used to Handle in Many ways

// Merging Two arrays

let array1 = [1, 2, 3, 2, 1];
let array3 = [3, 4, 5, 3, 2];
let array4 = [5, 4, 3, 1, 2];

let array5 = [...array1, ...array4, ...array3];
console.log(array5);

// used as copy the data to other data overwrite that particular data and showing

array1 = [23, ...array3, 1231];
console.log(array1);

// with the help of we can also merge the two arrays

const obj1 = {
  a: 1,
  b: 2,
};

const obj2 = {
  c: "I don't Know",
  d: "No I Really Don 't know",
};

console.log({ ...obj1, ...obj2 }); // return the new object with the copied data into the one object

// spread operator is also used to pass the arguement on the function

const newMessage = ["IS it work", "Let's Check if it works"];

const message = (msg, data) => {
  return (msg, data);
};

const theData = message(...newMessage);
console.log(theData);

let array11 = [];
let array12 = [
  [1, 2],
  [3, 4],
];

console.log("ythe concat work with nested array :", array11.concat(array12));

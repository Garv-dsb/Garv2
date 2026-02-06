// Write a function that accepts an array of numbers and returns the first duplicate number it encounters. If there are no duplicates, return -1.

// findFirstDuplicate([1, 2, 3, 4, 5, 2]);  // Returns: 2
// findFirstDuplicate([1, 2, 3, 4, 5]);     // Returns: -1

// function findFirstDuplicate(arr) {
//   //   for (let i = 0; i < arr.length; i++) {
//   //     // console.log("the indefOf", arr.indexOf(arr[i]) , i);
//   //     if (arr.indexOf(arr[i]) != i) {
//   //       return arr[i];
//   //     } else {
//   //       return -1;
//   //     }
//   //   }

//   const cache = new Map();
//   for (const element of arr) {
//     if (cache[element]) {
//       return element;
//     } else {
//       cache[element] = 1;
//     }
//   }
//   return -1;
// }

// const result = findFirstDuplicate([1, 2, 3, 4, 5, 2]); // Returns: 2
// const result1 = findFirstDuplicate([1, 2, 3, 4, 5]); // Returns: -1

// console.log(result1);

// Summary
// - Here the indexOF Method returns the index of the Element . if the element have come first and then again same ELement then the index is same

// - Here 2 Occur 2 times so it's index is counted at 1

// - And here the index returns the Unique number .. We can create a condition if the indexOf() and index have unique number than stay in the array else not ...

// And also returns the first duplicate number we can use condition

// const data = findFirstDuplicate([1, 2, 3, 4, 5, 2]);

// const data = findFirstDuplicate([1, 2, 3, 4, 5]);

// console.log(data);

// 2. Write a function that removes all duplicates from an array of numbers.

// removeDuplicates([1, 2, 2, 3, 4, 4, 5]);  // Returns: [1, 2, 3, 4, 5]

// function removeDuplicates(arr) {
//   const newArr = arr.filter((element, index) => {
//     return arr.indexOf(element) === index;
//   });

//   return newArr;
// }

// // const filteredData = removeDuplicates([1, 2, 2, 3, 4, 4, 5]);
// const filteredData = removeDuplicates([1, 2, 2, 3, 4, 4, 5 , 1, 1, 1, 12 , 12 ,5 , 12 , 13 , 121 , 32]);

// console.log(filteredData);

// 4. Reverse Words in a String
// Write a function that reverses the words in a string. You can assume that words are separated by spaces.

// let reversedString = "";

// function reverseWords(str) {
//   const strArray = str.split(" ");

//   reversedString = strArray.reverse().join(" ");
//   return reversedString;
// }

// // const resultString = reverseWords("JavaScript is awesome");

// const resultString = reverseWords("Hello My Name is Garv");

// console.log(resultString);

// Example:
// reverseWords("JavaScript is awesome");  // Returns: "awesome is JavaScript"

// Summary - Here we are a hint that  " You can assume that words are separated by spaces."
// - we can do with the help of trim() function or we can add or check that if we have a space " " then separate the letters

// Check if Array Contains All Elements
// Write a function that checks if all elements of a smaller array are contained within a larger array.

// function containsAllElements(arr1, arr2) {
//   let arr2length = arr2.length;
//   let checkLength = 0;

//   arr2.map((data) => {
//     if (arr1.includes(data)) {
//       checkLength += 1;
//     }
//   });

//   return checkLength === arr2length;
// }

// const dataElements = containsAllElements([1, 2, 3], [3, 3]);

// console.log(dataElements);

// Example:
// containsAllElements([1, 2, 3, 4], [2, 3]);  // Returns: true
// containsAllElements([1, 2, 3], [3, 5]);    // Returns: false

// 6. Flatten a Nested Array
// Write a function that flattens a nested array into a single array.

// function flattenArray(arr) {
//   return arr.flat(Infinity);
// }

// const result = flattenArray([1, [2, 3], [4, [5, 6]]]);

// console.log(result);

// Example:
// flattenArray([1, [2, 3], [4, [5, 6]]);  // Returns: [1, 2, 3, 4, 5, 6]

// 7 . Sum of Even Numbers
// Write a function that returns the sum of all even numbers in an array.

// function sumEvenNumbers(arr) {
//   let sumOfNumber = 0;

//   arr.forEach((data) => {
//     if (data % 2 === 0) {
//       sumOfNumber += data;
//     }
//   });

//   return sumOfNumber;
// }

// // const result = sumEvenNumbers([1, 2, 3, 4, 5, 6]);
// const result = sumEvenNumbers([2,4,6,8,10,3]);  //30

// console.log(result);

// Example: sumEvenNumbers([1, 2, 3, 4, 5, 6]); // Returns: 12

// 8. Find the Missing Number
// Write a function that finds the missing number in an array of numbers from 1 to n, where one number is missing.

// function findMissingNumber(arr) {
//   let missingNumber = [];
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (i + 1 != arr[i]) {
//       missingNumber.push(i + 1);
//       continue;
//     }
//     // console.log(i);
//     // console.log(arr[i]);
//   }

//   return missingNumber;
// }

// function findMissingNumber(arr) {
//   let totalLength = arr.length + 1;
//   let expectedNumber = 0;
//   let totalNumber = 0;

//   expectedNumber = (totalLength * (totalLength + 1)) / 2; // summotian formula n*(n + 1 ) / 2

//   for (let i = 0; i < totalLength - 1; i++) {
//     totalNumber += arr[i];
//   }
// }
// console.log(result2);

// Example:
// findMissingNumber([1, 2, 4, 5, 6]);  // Returns: 3

// 9. Sort the Array in Descending Order
// Write a function that sorts an array of numbers in descending order without using the built-in .sort() method.

// function sortDescending(a) {
//   for (let i = 0; i < a.length - 1; i++) {
//     for (let j = 0; j < a.length - i - 1; j++) {
//       if (a[j] < a[j + 1]) {
//         temp = a[j];
//         a[j] = a[j + 1];
//         a[j + 1] = temp;
//       }
//     }
//     console.log("interation", i, a);
//   }

//   return a;
// }

// function sortDescending(arr) {}

// const result = sortDescending([12, 15, 14, 11, 92]);
// const result = sortDescending([1, 3, 2, 5, 4]);
// console.log(result);

// Example: sortDescending([1, 3, 2, 5, 4]); // Returns: [5, 4, 3, 2, 1]

// 10. Find the Intersection of Two Arrays
// Write a function that returns an array of elements that are present in both arrays.

// function intersection(arr1, arr2) {
//   const intersectedArray = [];

//   arr2.forEach((data) => {
//     if (arr1.includes(data)) {
//       intersectedArray.push(data);
//     }
//   });

//   return intersectedArray;
// }

// const result = intersection([1, 2, 3, 1, 8, 4, 7, 6], [5, 1, 7]);
// console.log(result);

// 3. Find the Most Frequent Element
// Write a function that finds and returns the most frequent element in an array. If there is a tie, return the one that appears first in the array.

function mostFrequentElement(arr) {
  //   let count = 0;
  //   for (let i = 0; i < arr.length; i++) {
  //     if (arr.indexOf(arr[i]) == arr.indexOf(arr[i])) {
  //       count += 1;
  //       console.log(arr[i]);
  //     }
  //     // console.log(arr.indexOf(arr[i]));
  //   }
  //   return count;

  const count = {};
  for (let data of arr) {
    count[data] = (count[data] || 0) + 1;
  }

  const dataValues = Object.values(count);
  const MaxValue = Math.max(...dataValues);

  return MaxValue;
}

const result = mostFrequentElement([1, 3, 1, 2, 3, 3, 4]);
console.log(result);

// mostFrequentElement([1, 3, 1, 2, 3, 3, 4]);  // Returns: 3

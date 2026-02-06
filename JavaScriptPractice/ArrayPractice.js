// Array Practice Questions -

const arrLength = (arr) => {
  let totalIndex = 0;
  arr.map(() => {
    totalIndex += 1;
  });
  return totalIndex;
};

console.log(arrLength([1, 2, 3, 1, 1, 2]));

// Sorting the Number ascending order

const sortNumber = (arr) => {
  arr.sort((a, b) => a - b);
};

const arr = [12, 11, 2, 1221, 43, 122];

sortNumber(arr);
console.log(arr);

// Sorting the Number descending order

const descendingSort = (arr) => {
  arr.sort((a, b) => b - a);
};

descendingSort(arr);
console.log(arr);

console.log(arr.toString());

console.log(arr.at(-1));

// Array Join method that joins the array into string

const arrayJoin = ["Banana", "Apple", "Mango", "Grapes"];

console.log(arrayJoin.join(","));

const SearchElement = (arr, SearchElement) => {
  //   for (let data of arr) {
  //     console.log(data == SearchElement);
  //   }
  //   arr.filter((val) => {
  //     return val != SearchElement;
  //   });

  arr.map(() => {});
};

const filterData = SearchElement(
  ["Banana", "Apple", "Mango", "Grapes"],
  "Mango",
);
// console.log(filterData);

const num = [1, 1, 12, 121];

const newNum = num.filter((val, index) => {
  return num.indexOf(val) === index;
});

// const newNum = num.filter((val) => {
//   return val.
// });

// const newNum = num.sort((a, b) => a !== b);

console.log(newNum);

// copywithin - this method basically copywithin the elements to another position
const ele = [2, 3, 4, 5, 6];
console.log(ele.copyWithin(2, 4)); // copy the two element from index 4

// flat() method

const subArr = [
  [1, 2, 3],
  [3, 4, 5, 2],
];
console.log(subArr.flat());

// flatMap() method - flatMap() method first map the element and then flattering the data

const newArr = ele.flatMap((val) => {
  return [val, val * val];
});

console.log(newArr);

// splice method that is used to add the elements into the array ( multiple elements )


// slice method - slice method is used to slice a part from the given array 

console.log(ele.slice(2)); // slice two elements from the array 


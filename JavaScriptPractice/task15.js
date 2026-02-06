// String - What is String ? - String is a sequesnces of character that is used to store the sequesnces of characters .. there are different ways to write the sequence of character

// we can use double quotes -  single quotes , and then the backticks

let stringSingle = "Garv Thakral";
let stringDoubkle = "Garv Thakral";

let backticksData = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere molestiae illum dignissimos, animi vero earum accusamus accusantium vitae, voluptatibus, beatae sequi dolorum fuga ullam commodi fugiat voluptate tempore aut. Vero`;

// we can not add multiple line data with the help of the single and the double quotes

// const fullName = "Garv
// Thakral "   it gives error

// Backticks work different they also allow to add a dynamic variable into the string

const userName = prompt("Please enter Your Name !");

const Greeting = (name) => {
  console.log(`Hello ${name} !`);
};

Greeting(userName); // This will Print the Name of the Admin that take the input from the user and the function will take a arguement nd process that and run and print the Greeting with the help of the Backticks

// Specail characters - In JavaScript there are some specail character that is used to format the string

// '\n that is used for the new line character and the \' , \" , \` in the string quotes

// String also have some Prperties and Method , that is used for the apply on string that tells the state

// lenth property

const fullName = "Garv Thakral";
console.log("Lenth of the fullName is :", fullName.length);

// To Acccess the Character of the String we can use chat.at() and also the index to access that

console.log(fullName[0]);
console.log(fullName.at(-1)); // it's not work for from the last position we have to work with the positions that is the chat.at

// String is immutable - we can replace the string but we can not change the character of the string that is the immutauable and error giving

let immutableString = "Garv";

immutableString[0] = "h";
console.log(immutableString); // it's not changed

immutableString = "Aman";
console.log(immutableString); // We can replace the string ( We can replace the string );

// To change the cases of the Substrings we can use the toUpperCase() and the toLowerCase();

console.log(immutableString.toLowerCase()); // all letter lowercase

console.log(immutableString.toUpperCase()); // all letter uppercase

// Substring finding in the String --- there are many methods we can use the

// indexOf() - indexof() is used to find the index of the given string and the 2nd arguement is the position where to find from that

// if the given string or element is not find it may returns the -1

console.log(immutableString.indexOf("Garv"));

// lastIndexOf () is also similar to the same searching of but this will search from the ending ( last ) to the first

// includes , startwith , endwith --> they are used for the finding that a substring is includes in the given string or not

console.log(immutableString.includes("AM")); // returns true if exsists else it returns false

// Also there is the startwith() and endwith() methods that are used to return true or false if there is match found else nothing

// Find theSubstring - Basically there are three ways Substring , slice and str

// 1. slice method

const subString = "Hello Test!";
console.log(subString.slice(0, 2)); // start from the 0 to 2 but not include the 2

// 2. Substring  - it's also same as the Slice but it allow start index to greater than the Last ending index

console.log(subString.substring(7, 6)); // start from the 7 and to 6

// 3. Substr - It's from previous it allow us to take thelength from the given index and then it print upto we given length

console.log(subString.substr(2, 10)); // 2nd arguement is the length where it they print upto that

// Comparison in Strings - Basically the are used for comparing String . the String are compared character by character

// if we want to know about the codePoint

console.log(subString.codePointAt(0));

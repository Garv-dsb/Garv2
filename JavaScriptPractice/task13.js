// working with numbers

// There are Different way to write the numbers basically there are two ways to write a number that is regular number and the big Integer Numbers

// Regular Numbers Are the 64 bit numbers and the Big Int number is from the fixed length positive to the negative length

let n1 = 1_000_000_000; // this is the syntatic sugar syntax that is used to write the numbers in the way

// Also there is one more to write the Number that is

let n2 = 1e3; // three numbers 1 * 1000 used to write the more length values

let n3 = 1e-6; // means the answers is 0.000001

console.log(n1, n2, n3);

// toSting(base); that is used to convert the Number into the string

let num1 = 255;
console.log(num1.toString(2));

// Math Functions - that is used for rounding to nearest number or to the remove decimal

// All Math functions that are using they are basically turns the given string and then turns then into the string and show the result

let num2 = 9871.121;

console.log(Math.floor(num2)); // Remove the floating points part only decimal intefer parts will remain same

console.log(Math.ceil(num2)); // basically it make the number to the rounded 3.1 became the 4 and -1.1 became the -2

console.log(Math.round(num2)); // basically this method turns the number neares to the round 3.1 became the 3 and the 1.6 became the 2

// tofixed(n) - this will fixed round the numbers upto to the given length of the given fixed n value

console.log(num2.toFixed(12)); // fixed the number into the given number passes n value and then turn it into the string

// Imprecise calculations  - This Type of calculation is some time different because if we working with the more high digit numbers then this is more difficult but the regular number store the 64 bit number case but here only 52 bit number store the actual decimal and else that is used only for 11 bit store the decimal part and 1 bit is store the sign

let num3 = 1e500;
console.log(num3); //  it goes to infinity because it not a number it goes to infinity

// falsy test - if we add the 0.1 + 0.2 is not the actual 0.3 ....

console.log(0.1 + 0.2 === 0.3); // what's the result it goes to the 0.3 if we think normally but it doesn't 0.3 it had some different value that is the false because

console.log(0.1 + 0.2); // the value of this is 0.30000000000000004 is actual we got


// We have some best Infinity and NaN value . so we have to run that the test is isNaN and isFinite to check that number is NaN or finite not

const num12 = 1e1000; // is inifitniy 
console.log(isFinite(num12)); // False because is infinity not finite number


// Sometime we got a number that is with the string like the our currency in dollars '12$' then we have to parse the number to got the actual Number 

const dolNum = '12$';
const floatInch = '123.1In';

console.log('Parse INteger' , parseInt(dolNum)); // 12
console.log('float Number Paring that is ' , parseFloat(floatInch)); // 1234.1


// We have Some more different Methods in the Numbers that is used 

console.log(Math.random()); // Give any Number 0. .... some number 

// If we want a number that is between the 0 to 100 then we can use the Math.floor()

console.log(Math.floor(Math.random() * 5 + 1)); // + 1 if we want from 1 to 6 

// Math.pow(num , power) // it's used to make a number to power of that 

console.log(Math.pow(3 , 3)); 
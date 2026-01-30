// use of Loops
// Loops - while , do while , switch case , for loop

// it's used when we have to run the multiple code statements

let i = 0;
let sum = 0;

while (i < 100) {
  sum = sum + i;
  i++;
}

console.log(sum);

// do while loop
let j = prompt("Enter the Number you want to make sum upto: ");
// console.log(typeof j);  it return string not the number

j = Number(j); // Type conversion to number

let newSum = 0;

for (let k = 0; k < j; k++) {
  newSum = newSum + k;
}

alert("The Sum is Your entered number" + " " + j + "is:" + " " + newSum);

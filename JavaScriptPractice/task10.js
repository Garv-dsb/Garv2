// Object is a data type that is used in the JS to store the different key value pairs in the Object

// Object can be create using the two methods first using constructor and second the literal method

let person = {
  name: "Garv Thakral",
  age: 21,
};

//  we can access the value of the object using the keys syntax is (objectName.keyName)

console.log(person.name);
console.log(person.age);

// Adding a value in the object
person.isAdmin = false;

// to remove a value from the object we can use the delete keyword

delete person.isAdmin;

// Multi word key is be must in the double quotes

let personNew = {
  userName: "Hello Garv!",
  isProfilePic: "Hello Garv!",
  "You are in London": false,
};

// For Accessing the Multiword value we have to use the square brackets not the dot operator

console.log(personNew["You are in London"]);

// for setting the multiword value in any object , for getting and deleting we use the multiword values

// we have also another way to do the multiword access with the help of variable assigning

let newKey = "No You are in London !";
personNew[personNew] = false;

console.log(personNew);

// Also we can take the value using the prompt  and store it into the variable

// const newData = prompt(
//   "Enter the New Data and store it into the new Variable :",
// );

// personNew["isAdmin"] = newData;

// We can also add more complex value to the object key values

// const moreComplexData = prompt(
//   "Please Enter one more complex value and the data is :",
// );

let Person3 = {
  userName: "Garv Thakral",
  Age: 21,
};

// Person3[moreComplexData + "Yes More Complex!"] = "It's Complex!";

console.log(Person3); // more complex keyName of the property Value

//  Function returning as a Object

const objFunction = (name, age) => {
  return {
    name,
    age,
  };
};

console.log(objFunction("Garv", 21));

// for exsisting check in the object we use the 'in' operator

console.log("name" in objFunction); // true
console.log("userName" in objFunction); // false

// Loops over the Object , to iterate over the each element of the object we can use the  ( for .. in ) loop
for (let data in Person3) {
  // alert(data);
}

// task 1 : - Write the code, one line for each action:

// Create an empty object user.
// Add the property name with the value John.
// Add the property surname with the value Smith.
// Change the value of the name to Pete.
// Remove the property name from the object

// for creating the object we have two ways using - constructor and the empty object using braces

const useObject = {
  name: "john",
  surname: "Smith",
};

// Change the value of the name to Pete.

useObject.name = "Pete";

// Remove the property name from the object

delete useObject.name;

console.log(useObject);

// task 2 : We have an object storing salaries of our team:

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

//  we can use the for in loop to iterate over each element of object and loop through that

let sum = 0;

for (let salariesSum in salaries) {
  sum += salaries[salariesSum];
}

console.log("The sum of the salaries is :", sum);

// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

const multiplyNumeric = (obj) => {
  for (let data in obj) {
    console.log(typeof obj[data]);
    if (typeof obj[data] === "number") {
      alert(obj[data]);
      obj[data] = obj[data] * 2;
    }
  }
};

multiplyNumeric(menu);
console.log(menu);

// Sometimes to use the data of the object itself by the method we can use the 'this' keyword

let newUser = {
  name: "Garv Thakral",
  age: 21,

  // greet: function data(msg) {
  //   console.log(`Hello ${this.name} ${msg}`);
  // },
};

// console.log(newUser.greet("You are Good!"));

// Object cloning & referencing

let admin = newUser; // now the admin variable also referncing the same address of the user are

// if we compare both they are equal

console.log(admin == newUser); // true
console.log(admin === newUser); // true

// if they are not referencing the same variable then they are not equal

// cloning and merging , object.assign

// to clone the object from object to independent we can use the Object.assign() and the structuredClone(object)

let cloneUser = structuredClone(newUser);

// if we can change anything in the cloneUSer , it doesn't reflect in the newUser

// Nested cloning 

newUser.age = 32;

console.log(newUser); // age is the new age that is 32
console.log(cloneUser); // age is same as 21

let userAddress = {
  address :{
    // street: "ABC , NEAR HELLO WORLD!", 
  }
}

// const address = userAddress.address.street;  it's give error that the data is not exsists 


// now we can use like that the conditional operator to check 

const address = userAddress.address ? userAddress.address.street : null;  // we are using more best way to this but here the data is repeat then it's not good way 

// we can do the better approach that is the option chaining 
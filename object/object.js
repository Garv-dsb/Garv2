// Objects - Object in javaScript
// There are Two Data types of  Is present in the javaScript - that is Primitive and Non - Primitive
// Non primitve Data Types contain oBjects

// Non primitve Data types are mutuable they are used to store the collection of Data

// there are different Object is present - Object ( key - (Value - pairs) , Arrays , map and set )

// Objects - In Js the object is used to stored the key value pairs , is a specail data type in js that is used to store collection of data in the form of keys

// Ways to create a object in JS - There are primary four ways to create the Object in the JS

// 1. using template literals - { }

const obj1 = {
  // Object with different values stored as a collection of the data using { }
  name: "Garv Thakral!",
  age: 21,
};

// 2. with the Help of the constructor Function

function object2(name, age, address) {
  this.name = name;
  this.age = age;
  this.address = address;
}

const obj2 = new object2("Garv", 21, "ABC YZX");

console.log("The Object is created using the constructor classes:", obj2);

// 3. the third way to create the object with the help of the ES6 classes

class object3 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const obj3 = new object3("Hello Data!", 21);

console.log("The object is created using the classes", obj3);

// 4. using the help of Object.create()

const obj4 = Object.create(obj3);

obj4.name = "Garv";
obj4.age = 21;

console.log(
  `Object 4 is created using the help of the Object.create() method :`,
  obj4,
);

// How to access the values of the Object In the JS

// There are several ways to depends how we can accessing the values in the JS Object

// 1. The first way is the dot method

let addressObject = {
  "street Address": "ABC",
  pincode: 136131,
  landmark: "Near the Hotel Grand",
  state: "Haryana",
};

// with the help of dot operator

console.log(addressObject.street);

// with the help of square brackets

console.log(addressObject["pincode"]);

// Sometime some data is not accessible with the dot method we have to use the square brackets

// we can also access the value using the destruct of the object

const { pincode, landmark } = addressObject;

console.log(
  "Extract the value using the destruct of the object Data : ",
  pincode,
  landmark,
);

// Adding , Updating and deleting values in the Object

// Adding the Values into the object

addressObject.postCode = 1231121;
console.log("Added the new Value :", addressObject["postCode"]);

addressObject.state = "Andhra Pradesh";
console.log("Updated the Value of the State :", addressObject["state"]);

delete addressObject.pincode;
console.log(addressObject); // The addressObject pincode is deleted now

// Iteration over the JS object - Iteration loops

for (let data in addressObject) {
  console.log("Loop over the values of the addressObject:".data); // ptint the keys and the values
}

// using Object.keys() , object.values() , Object.Entries()

const obj = {
  name: "Garv",
  age: 21,
};

console.log(Object.keys(obj)); // This will return the keys
console.log(Object.values(obj)); // this will return the arrays of values
console.log(Object.entries(obj)); // this will return two arrays - one of with values and one of with the values and one of with the keys

// To iterate over this arrays we use the ( for .. of) loops

for (let [key, value] of Object.entries(obj)) {
  console.log(`key : ${key} and value : ${value}`);
}

// Object.keys() - return the array of keys

for (let keys of Object.keys(obj)) {
  console.log(`The key : ${keys}`);
}

// Object.values() - return the array of values

for (let values of Object.values(obj)) {
  console.log(`The Value : ${values}`);
}

// Propery of the Object  - Properties are key:value Pairs

//  'in' operator used for the property Exsisitence check in the Object

console.log("name" in obj); // True ( The property exsist )
console.log("address" in obj); // false ( The property not exsist )

// Nested Object - Nested Object are the Objects under the objects

const userData = {
  name: "Garv",
  age: 21,
  "address Data": {
    street: "ABC XYZ",
    pinCode: 136131,
    postCode: 132121,
    Landmark: "Near Hotel Grand , New York",
  },
};

// Accessing the nested Object using the dot operator (.)
console.log(userData["address Data"]["street"]);

// Object Method - OBject method are the actions that can perform on the object

// The This keyword - this keyword basically target the current refer value

// If the this is in the current object method , this is target to the that object.

const functObj = {
  name: "Garv Thakral",
  age: 21,
  greet: function () {
    return `This is the user ${this.name}`;
  },
};

console.log(functObj.greet());

// 'this' basically target the current refer instace

// we used this because we can use the same function to multiple object

const functObjectNew = {
  name: "Rahul Kumar",
  age: 21,
  greet: function () {
    return `This is the new user ${this.name}`;
  },
};

console.log(functObjectNew.greet());

console.log(Object.freeze(obj)); // Object is Freeze we cannot add the more data in it . it prevent the data to be added to in it.

obj.fullName = "Garv Thakral!";
console.log(obj);



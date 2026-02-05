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
  console.log(addressObject[data]); 
}

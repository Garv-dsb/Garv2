// Built in Object Methods - There are different Object Method. that used the object consturctor to create that.

const sourceObject = {
  name: "Garv Thakral",
  age: 21,
  address: {
    street: "ABC ZXXY",
    localAddress: "136131, KURUKSHTRA",
    state: "HARYANA",
  },
};

const targetOBject = {};

Object.assign(targetOBject, sourceObject); // we copy all the properies from sourceObject to targetOBject
console.log(targetOBject);

// Object.create() - Create Object with the prototype and copy all the properties into it

//  creates a new object using an existing object as the prototype of the newly created object.

const protoObj = {
  data: "Hello Garv!",
  greet: function () {
    return `Hello in data the value is ${this.data}`;
  },
};

const newProtoObj = Object.create(protoObj);

newProtoObj.data = "Yes ! I am data";
newProtoObj.greet();
console.log(newProtoObj.data);

// Object.keys(obj) , Object.values(obj) , Object.entries(obj) - they are used as a iterate also but they return the arrays

const userData = {
  name: "Garv Thakral !",
  age: 21,
  isAdmin: false,
};

console.log(Object.keys(userData)); // return the keys of array

console.log(Object.values(userData)); // return the values of array

console.log(Object.entries(userData)); // return the nested array with key and value

// object defineProperty

const adminUser = {};

Object.defineProperty(adminUser, "name", {
  value: "Super Admin",
  writable: false,
  enumerable: true,
});

console.log("New property define in adminUser Object :-", adminUser.name);

// Object.getOwnPropertyValue(obj); - They return the array of all proprties that we have exsisits

console.log(Object.getOwnPropertyNames(userData));

// Object.getPrototypeOf(obj): Returns the prototype of an object.

console.log(Object.getPrototypeOf(userData)); 

// Object Freeze Object.freeze(obj)

Object.freeze(userData);

userData.address = "ABC ZXSYS";
console.log(userData);

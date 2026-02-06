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
console.log(userData); // prevent to adding the address in it . No more data is added in that

// Object.seal(obj): Prevents property deletion but allows modification.

const newAdminData = {
  employees: 121,
  data: 123,
  address: "ABC ZXS",
};

Object.seal(newAdminData);

delete newAdminData.employees;
console.log(newAdminData); // prevent to delete but we can modify

newAdminData.employees = 231;
console.log(newAdminData); // we can modify the data but

// Instance Method - Instance methods are the methods that is directly tske from the Object.ptototype

console.log(newAdminData.toString()); // we can't do

// this keyword / method with the - call() , apply() , bind()

function greet(msg) {
  return `this is data ${msg} and the name of the data owner is ${this.name}`;
}

const thisWithObject = {
  name: "Garv Thakral",
  age: 21,
};

console.log(greet.call(thisWithObject));

// apply() method - apply() method is similar to the call() method but it's take arguement as array or array like object  - helpful when we dynamic

function userAddress(city, country) {
  return `Hello , ${this.name} and the ${this.name} is belong to the ${city} , ${country}`;
}

const checkUserData = {
  name: "Garv",
};

console.log(userAddress.apply(checkUserData, ["Kuk", "India"]));

// bind(): Returns a new function with the specified this value permanently bound to it, which can be invoked later. The original function is not modified.

// bind() - bind() method is used to bind the value to a function permanently and can invoke later

function bindData() {
  return `the user have the age of ${this.age}`;
}

const getAgeObj = {
  age: 21,
};

const sayAge = bindData.bind(getAgeObj); // we have to bind a new function to permanently set this age to the object getAgeObj.age and in the function

console.log(sayAge());

// Copy & Merging the Arrays in the JS

// 1. spread Operator 
// merging 

const copyObj = {
  carName: "HONDA CIVIC",
  carModel: 2020,
  carManufacturingCompany: "HONDA",
};

const copyObj1 = {
  carName1: "HONDA AMAZe",
  carModel1: 2019,
  carManufacturingCompany1: "HONDA",
};

const mixedCar = { ...copyObj, ...copyObj1 };

console.log(mixedCar);

// copying using the spread operator 

const mixedCar1 = {carDesigner : "dt. hello" , ...mixedCar};
console.log(mixedCar1)

// 1. Object.assign()
// with the help of Object.assign() we can merge and copy both the values
// destructuring - destructuring Basically refers to the pprocess extracting sometimes fromthat and extract separate .

// In javaScript Most commanly we have two data structure that is used most - arrays and objects

// Arrays Destructuring - We can destructuring the Array in this way

let [firstName, lastName] = "Garv, Thakral".split(", "); // delim is the most important part that is used to split string into the Arrays

console.log(firstName);
console.log(lastName);

// We can also do like that destructuring the Array in this way
let [startName, endName] = ["Garv", "Thakral"];

console.log(startName);
console.log(endName);


//The rest ‘…’ Baiscally this is used when we have the Large Data Elements in The array And assigning Variables is Less 

let fruitsNames = ["Apple" , "Banana" , "Grapes" , "Mango"];

let [firstFruit , secondFruit , ...restFruits] = fruitsNames; // by default it takes the value from the start from the first and then lefts ones 

console.log(restFruits); // the restFruits contain the rest Data that is used to copy into that variables 


// Object Destructuring  - Object destructuring also possible like arrays 

// syntax of Destructuring the object is like 

// let {obj1 , obj2 , obj3 , obj4} = {variable1 , variable2};

let destructuringObj = {
    name : "Garv",
    age : 21,
    address : {
        "street" : "ABC , ZSX"
    }
}

let { name , age , ...address } = destructuringObj; // name must be same during Destruturing 

console.log(address);
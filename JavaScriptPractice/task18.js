// JSON methods - JavaScript Object Notation
// Sometimes over Http we have to sent the plain string text not the Actual Object

// That's why JSON is used . JSON is a plain string text

// to convert the JSON into object we have a method that is JSON.parse();

// TO convert the Object back to the JSOn we have a another method that is the JSON.stringfy();

const newObject = {
  name: "Garv",
  age: 21,
};

const jsonData = JSON.stringify(newObject);
console.log("JSON Data: ", jsonData);

// Convert JSON data to get back into the Object we have the JSON parse() method

const ObjectData = JSON.parse(jsonData);
console.log("Back Object Data is :", ObjectData);

// The type of the JSOn is the String not object or anything

console.log("The Type of the JSON Object that is : ", typeof jsonData); // that data is a type of string

// JSON is nothing just a Object like Normal JavaScript Object but in the String just


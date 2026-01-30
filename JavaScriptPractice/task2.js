// type conversion 
// sometimes we have to explicity convert he type from another value to other value 

// alert is by default convert it any value into the string


// String Conversion 

let houseNumber = 121 ;
console.log(typeof houseNumber); // type is number 

houseNumber = String(houseNumber);
console.log(typeof houseNumber); //  now the type is string 


// Number conversion 

let age = "18";
console.log(typeof age); // the type of age we can see is 18 

// but sometimes if the data we need is in number we use conversion 
age = Number(age);
console.log(typeof age);

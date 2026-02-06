// Date and time Object

// Date - Date is the Object in the js ( built in  method);

// creation of Date

// const date = new Date();
// const  date = new Date(1999 , 2)  year month
// const date = new Date(2000, 11, 18); year month date
// const date = new Date(2000, 11, 18, 21); // year month date hour
// const date = new Date(2000, 11, 18, 21 , 12); // year month date hour minute

const date = new Date(2000, 11, 18, 21, 12, 50); // year month date hour minute second

console.log(date);

// We can also set the Hours , date , year , month and seconds into to the JS  with directly to the Date Object in JS

const newHour = date.setHours(10);

// Get the 4 digit year with the help of getYear()

const currentYear = date.getMonth();
console.log(currentYear);

// Auto Correction in the Date Object - the date object will do the autocorrrection
// if the date was autoorrection the date if we pass the wrong date

const newDate = new Date(2013, 0, 32);
console.log(newDate);

// Date to NUmber , time diff

console.log(+newDate);

const date1 = new Date(); // this will return the standard Date

const date2 = Date.now(); // this will return the numeric data , if we need comparison we can only use the 'Date.now()' . else we can use the normal date

console.log(date1); // Wed Feb 04 2026 09:51:39 GMT+0530 (India Standard Time)
console.log(date2); // 1770178883797

// Date.parse(str) - Basically this is used to parse the Date from a given String given as a date

// The specail date format will be the YYYY-MM-DDTHH:mm:ss.sssZ


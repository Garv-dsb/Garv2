// dom - document Object model - Document Object Moedl is the Feature - when we run any web into the browser it makes the DOM tree -

// where the on top of that we have the document ( whole ) -> internlly we have  the Then Html ---> after html we have the head tag and body tag like a heirarchy we are creating

// To Interact with the dom we can use the web browser ( developer Panel ) and the console to change the data

// Also DOM can autocrrect the Html tags if there is some misssing and also if the Browser working with the tables an we forgot to add the <tbody> then the DOM automattically add the tbody in the HTML tree

// DOM allow us to do anything with their content and data - But for that we have to accessing the elements before working with the elements

// To get the chilNodes - of the given parent

for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log("The element of the Dom is ", document.body.childNodes[i]);
}

// console all the elements that are currently

// Accessing the First child

console.log(
  "Accessing the first Element of the DOM is using firstChild",
  document.body.firstChild,
);

// Last child accessing

console.log(
  "Accessing the Last ELement of the DOM is using lastChild",
  document.body.lastChild,
);

// comparing the first elemtnt and last element in different way

console.log(
  "That they are same we can access :",
  document.body.childNodes[0] === document.body.firstChild,
);

// Accessing the NextSibling of the body

console.log(document.head.nextElementSibling); // Represent the Element with the tag
console.log(document.head.nextSibling); // Represent the Element like if it's text ( #comments , #text anything)

// Sometimes we didn't have to work with the text and comments ... frstChild , lastChild ( also return the Text and the comments )

console.log(document.body.children); // it returns all the children element of the body
console.log(document.body.parentElement); // return the Parent element of the body
console.log(document.body.nextElementSibling); // return the next element siblings ( if exsists else it's not )

// Some of the types have some extra Properties in whic h we have the - Tabes ,

// Searching in the DOM :- before working with the elements we have to access the elements ,
// first get the element - then manipulate over the object

// If we have the element that have the id , we can access the element using the document.getElementById("IdName");

const bigText = document.getElementById("textBig");
console.log(bigText); // console the whole element of the Text

bigText.style.backgroundColor = "wheat";

// we can also must access the element using the className

const checkClass = document.getElementsByClassName("iamclass");
checkClass[0].style.backgroundColor = "orange";

// we can also access the element using the querySelector() and querySelectorAll()

const helloAll = document.querySelectorAll(".hello1");
console.log(helloAll);

// here querySelector returns the static nodeList
// we can access by the help of the NodeList

for (let i = 0; i < helloAll.length; i++) {
  console.log("ELements Given by the querySelectorAll is ", helloAll[i]);
  helloAll[i].style.backgroundColor = "lightgrey";
}

// QuerySelector returns the Single Value that we can work with that

const helloSingle = document.querySelector(".hello1");
console.log("Access by with the help of the QuerySelectorOne ", helloSingle);

// QuerySelector is also High reliable - can also handle complex data and logic

const ComplexDataSelector = document.querySelector(".hello1 .we .hs");

// Element matches is used to select a element by a provided CSS selector string

const divContainer = document.querySelector(".container");
if (divContainer.matches(".container")) {
  console.log("container exsists");
}

// closest - closest is used to find the anchestor element in the DOM

const cardTittle = document.querySelector(".cardtitle");
console.log(cardTittle.closest(".card"));

// getElementByTagName - returns the element with the tag Name

// if we want to return the all the div document we can use the getElementByTagName

const allDivs = document.getElementsByTagName("div");
console.log(allDivs);

// Live Collections
// Live collections is a concept that is live update the collections of elements , But the Query Selector is not give the live collections - it's only give the Static Collections

// querySelectorAll - returns the array of static elements - it's not update the live collection

// checking The Attribute exsistence - To check that the Attribute exsistence or not

// we have differennt Method to manipulate the Html attributes

const input = document.querySelector("#attInput");
console.log(input);

console.log(input.hasAttribute("value")); // that input element have the attribute or not return the fale
input.setAttribute("value", "Garv Thakral!"); // the input have the attribute value with the name Garv Thakral

console.log(input); // Now the input have the attribute with the value that is the Garv thakral

console.log(input.getAttribute("name")); // return the value of the attribute Name
console.log("Input have class Attribute", input.hasAttribute("class")); // input have the class

input.removeAttribute("class"); // remove the value of the attribute class

console.log("Input have class Attribute", input.hasAttribute("class"));

console.log(input); // console the value of the input we check that the actually the class attribute remove or not

// Access The checkBox
const firstCheckBox = document.querySelector("#checkbox");
console.log("The checkBox is checked :", firstCheckBox.checked); // return the true value

// --------------------------------------------------------------------------------------------

// Modyfiying The Dom  - Our Main Objective is to manipulate the Dom or the data of the Dom

// We can create the Static Data or static pages with the help of the Css and Html

// But if we want to display the same exact Message with the help of the JavaScript . How we can do

// for that always we need to thing - Html Element or to access The element

// But we are not Doing this So we can use this with the help of the JS

// Create an ELement with the help of the Js

// To create a Element in the Js - we have two methods

// 1. create the element
const newDiv = document.createElement("div");
console.log("newDiv is created using CreateElement", newDiv); // Create the Element with the empty div

const textNode = document.createTextNode("Hello I am Text Node");
console.log("I am only the Text Node - not the actual P , h1", textNode); // create only the Text Node not actual the Good Node

// 2. insert the message

newDiv.className = "alert";

// insert the Html

newDiv.innerHTML = "<strong> Hi , There ! </strong> I am a message";

// 3. How to insert to he Html - we have a specail method that is the - append

document.body.append(newDiv); // This will add it to the Document

// Insert the Adjacent element at the specific Position  - We can insert the html , element , or string

newDiv.insertAdjacentHTML(
  "beforebegin",
  "<h1>This is the h1 tag before begin</h1>",
);

// Storing the string into variable and then pass it to the insertAdjacentHTML

const ele = document.createElement("h3");
ele.innerHTML = "<h3>This is the h3 tag  after begin</h3>";

newDiv.insertAdjacentHTML("afterbegin", ele.innerHTML);

// Remove a Particular Node - To remove the Particular node we have the Method that is the

// node.remove()

// Now remove the node

setTimeout(() => newDiv.remove(), 1000);

// clone Node - we can do with the help of the cloneNode(ture/false)

const newDiv2 = newDiv.cloneNode(true);
console.log(newDiv2); // deep clone of the newDiv

document.body.append(newDiv2); // only div not the element that we create with the help with the help of the beforeBegin

// We have also a another Methods that is the - document.write() -> that is used to write into the document

document.write("<b>I am the Document !</b>");

// styles and classes - Sometimes we need to work with the dynamic styling with the js

// for complex calculations - we can use the JS for this

// className and classList

// ...  className is Used to access the any className of the Object

console.log(newDiv.className);

// classList - classList that is used to add / remove / toggle and check contain

console.log(document.body.classList.add("bdy"));
// console.log(document.body.classList.toggle("bdy"));  - toggle means add the class if not exsists otherwise remove the class

console.log(document.body.classList.contains("bdy")); // return true/false if not exsists

// classList is iterable and also we can access the classList with the help of the (for..of ) loop

// Element Styling --- > We can styling the element with the help of the ele.style

const newCard = document.querySelector(".nextCard");
newCard.style.backgroundColor = "red";
newCard.style.width = '100px'
newCard.style.height = '100px'
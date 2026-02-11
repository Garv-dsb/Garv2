// BOM - Basically represented the Browser Object Model

// And there is a Top Object that is the Window ( Root Element )
// Window Object is used in two ways -
// accessing the global object
// Access the Browser Element

// Window is also used to access to open a new Tab

// Changing the color of the document to the red

window.document.body.style.background = "purple";

// Remove the Background color red after 2 second

// navigator Object that is used to access the background information - basically this is used

console.log(navigator.userAgent); // return the browser currently we are using

console.log(navigator.platform); // return the on which OS we are currently working

// There are many property that we can use with the help of the navigator

// Location Object - location object is used to access the current location or we working --- also it's used to redirect the Url

// const goTo = prompt("Please Enter the Correct Url You are want to redirect :");
// const checkConfirmed = confirm(`Realy want to go to the ${goTo} ?`);

// if (checkConfirmed) {
//   location.href = goTo;
// }

// Node Element Property - Basically There are different elements in the Js . that is used for the different accessing of the elements - But they are belong to the Different Abstract classes

// For checking the parentClass we have to use the alert

console.log(document); // that is inhertied from the HtmlDocument;
console.log(document.body); // that is also inhertied from the HTMLDocument

// We can also use the instanceOf to check that from which it's inherited
console.log(document.body instanceof HTMLBodyElement); // returns true

// innerHtml : that is used to change the content of the html and that is usedto replace the html of the page

// document.body.innerHTML = "<h1>HELLO NEW BODY !</h1>";
// document.body.innerHTML += "<h1>HELLO NEW BODY !</h1>";

// outerHtml - basically it's used to set the whole element of the we are accessing

const ele = document.getElementsByClassName("element");
ele.outerHTML = "<span>Replaced</span>";

// access the text content of the div container

// const divData = document.getElementsByClassName("todayNews");
// console.log("Text content of the div Element is :", divData);

// More properties - More Properties in the Html element

const inputElement = document.getElementById("UserName");
console.log(inputElement.type); // the type of the input element we create
console.log(inputElement.value); // Vale of the input element we assign - Garv
console.log(inputElement.id); // return the id of the input Element 
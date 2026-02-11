// Event - Event is an action that can perform and do something. and on event we can can makesomething or we can apply some function / or i can do some

// All DOM node can generate such signals ( and thus events not such to the DOM )

// There are different Events that are used -

// Mouse Events :-
// click - when the mouse button is clicked
// contextMenu - when the mouse right click on the Event
// mouseOut / mouseOver - when mouse come or out
// mouseUp / mouseDown - when the mouse is UP and down to the element
// mouseMove - when the mouse is moved

// keyboard Events -
// KeyDown , keyUp - when the key is Up and the Key is down

// Form Events -
// Submit - for the Form
// focus -for the Inputs

// DOM events -
// DOMContentLoaded - when the DOM is built

// we can assign the inline EventHandler like  on<eventName>

function printButtonCount() {
  for (let i = 1; i <= 3; i++) {
    alert(`Button is clicked ${i}`);
  }
}

// create a event and call on after access the Element

const eventButton = document.querySelector("#myButton");

eventButton.addEventListener("click", () => {
  alert("Yes this is Add Event Listener!");
});

// Event object - When any Event Happens the event Object is created nd passes to the Arguement to the Handler

eventButton.addEventListener("click", (event) => {
  console.log("The Event Object", event);
});


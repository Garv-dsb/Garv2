// Accessing all the elements
const newtask = document.querySelector("#addTask");
const addbtn = document.querySelector("#addButton");
const taskContainer = document.querySelector("#taskContainer");
const totalTasks = document.querySelector("#totalTasks");
const totalTasksList = document.createElement("p");
const totalPending = document.createElement("p");
const task = [];

// set states
// let isMarkDone = false;

// create the inital Input and a save Button to edit the data
const editContainer = document.createElement("div");
const editInput = document.createElement("input");
const saveButton = document.createElement("button");

// styling the edit Data

// totalTasks styling
totalTasksList.className = "font-italic";

// container
editContainer.className = "bg-grey flex flex-row";

// input
editInput.className = "border-b-[1px] w-full outline-none";
editInput.id = "editInput";

// button
saveButton.className = "px-[10px] py-[5px]";
saveButton.textContent = "save";
saveButton.id = "saveBtn";

// append this to editContainer
editContainer.append(editInput);
editContainer.append(saveButton);

function deleteItem(event) {
  // Check if the clicked element or its parent is a delete button
  const deleteButton = event.target.closest("#dltButton");

  if (!deleteButton) return;

  const itemToRemove = deleteButton.closest("div"); // we are appendinng the div to the li and then appending to the li .

  // Get the task id from the data attribute
  const taskId = itemToRemove.getAttribute("id");

  // delete from the array
  const index = task.findIndex((element) => element.id === taskId);
  task.splice(index, 1);

  // Remove from DOM
  itemToRemove.remove();
}

// function to mark as done
function markAsDone(event) {
  const trackMarkAsDone = event.target.closest("#idDone");
  const trackElement = event.target;

  if (!trackMarkAsDone) return;

  //  finding the siblings of the element
  const siblings = trackElement.parentElement.children;
  console.log(siblings);

  if (siblings[1] && trackMarkAsDone.checked) {
    siblings[1].className = "line-through text-red-500";
    // isMarkDone = true;
  } else {
    siblings[1].className = "font-[600]";
  }
}

function EditData(event) {
  const editButton = event.target.closest("#editbtn");

  //   not find return
  if (!editButton) return;

  // return div
  const itemtoEdit = editButton.closest("div");

  // which to edit
  const textElement = itemtoEdit.querySelector("p");
  if (!textElement) return;

  // set value to editInput
  editInput.value = textElement.textContent;
  itemtoEdit.append(editContainer);

  // save the data
  saveButton.onclick = () => {
    const newVal = editInput.value.trim();
    if (newVal) {
      textElement.textContent = newVal;

      // update data to the array
      const taskId = itemtoEdit.getAttribute("id");
      const index = task.findIndex((el) => el.id === taskId);
      task[index].value = newVal;
    }

    // after edit remove the container
    if (editContainer.parentElement) editContainer.remove();
    saveButton.onclick = null;
  };
}

function displayTask(taskData) {
  taskData.forEach((element) => {
    // clear the data before printing

    // create Elements
    const mainContainer = document.createElement("div");
    const actionContainer = document.createElement("span");
    const markAsDone = document.createElement("input");
    const deleteBtn = document.createElement("button");
    const editButton = document.createElement("button");
    const text = document.createElement("p");

    // actionContainer
    actionContainer.className = "flex flex-row gap-[10px]";

    //  checkbox
    markAsDone.type = "checkbox";
    markAsDone.className = "cursor-pointer h-5 w-5";
    markAsDone.id = "idDone";

    //  delete button
    deleteBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    deleteBtn.id = "dltButton";

    // edit Button
    editButton.innerHTML = '<i class="fa-solid fa-pencil"></i>';
    editButton.id = "editbtn";

    // text
    text.textContent = element.value;
    text.className = "font-[600]";

    // Create div container with flex layout
    mainContainer.className =
      "flex justify-between gap-3 p-2 bg-gray-100 rounded py-[10px] px-[5px] ";
    mainContainer.setAttribute("id", element.id);
    // we are setting the id to use in future
    actionContainer.append(deleteBtn);
    actionContainer.append(editButton);

    mainContainer.append(markAsDone);
    mainContainer.append(text);
    mainContainer.append(actionContainer);

    // if (isMarkDone === true) {
    //   actionContainer.innerHTML = "";
    // }

    taskContainer.append(mainContainer);
  });
}

//  delete the data with event delegation
taskContainer.addEventListener("click", deleteItem);

// delete the data with the help of the event delegation
taskContainer.addEventListener("change", markAsDone);

// Edit the Data with the event delegation
taskContainer.addEventListener("click", EditData);

// add the event listener to access the data of the input and store into the array
addbtn.addEventListener("click", () => {
  // clear the data before adding new

  if (newtask.value.trim()) {
    // if there is spaces don't add
    taskContainer.innerHTML = "";

    // reset the Total Tasks
    totalTasks.innerHTML = " ";
    // if there is any value then do this else nothing
    // take value from the input
    const taskValue = String(newtask.value.toLowerCase());

    // push to the array
    task.push({ value: taskValue, id: crypto.randomUUID() });

    // display the Data
    displayTask(task);

    // display the total Tasks
    // if (task.length > 0) {
    //   totalTasksList.textContent = `Total Tasks are in the List :- ${task.length}`;
    //   totalTasks.append(totalTasksList);
    // }
    // After push clean the input

    newtask.value = "";
  }
});

// initally Display Data
// displayTask(task);

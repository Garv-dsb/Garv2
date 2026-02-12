// 1. Access the element
// 2. create the postData function
// 3. calls the Function

// 1. Access the element
const formSubmit = document.getElementById("infoForm");
const submitBtn = document.getElementById("submitBtn");
const titleInput = document.getElementById("title");
const bodyInput = document.getElementById("body");

// 2. create the function

const submitForm = async (formData) => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    // headers: {
    //   "Content-Type": "application/json",
    // },
    body: JSON.stringify(formData),
  });

  return await response.json();
};

// 3. Submit Event listener

formSubmit.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(formSubmit);

  // 1. Access individual values
  const title = formData.get("title");
  const body = formData.get("body");
  console.log(title);
  console.log(body);

  // 2. Convert all form data into a plain JavaScript object
  const formObject = Object.fromEntries(formData.entries());
  console.log("Form Data Object:", formObject);

  // 3. Call the function
  submitForm(formObject);

  // 4. After call reset the Input
  titleInput.value = "";
  bodyInput.value = "";
});

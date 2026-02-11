const dataTable = document.querySelector(".userTable");

dataTable.addEventListener("click", (event) => {
  if (event.target && event.target.tagName === "TD") {
    const target = event.target;
    target.style.background = "red";
  }
});

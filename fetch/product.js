// 1. Access  the Element
// 2. Create FetchData function
// 3. Display Data
// 4. Calls the functions

// 1. Accessing the Elements
const productContainer = document.getElementById("productContainer");
const loadingtext = document.createElement("p");
let productData = [];

// 2. fetch the Data
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    productData = await response.json();
  } catch (error) {
    console.error("error During Fetching API", error);
  }
};

// 3. Display the Data
const displayData = () => {
  if (!productData?.length) return;
  if (!productContainer) {
    console.error("No element found with id 'productContainer'");
    return;
  }

  productData.forEach((data) => {
    // 1. Create elements
    const cardContainer = document.createElement("div");
    const textContainer = document.createElement("div");
    const cardTitle = document.createElement("h2");
    const cardDescription = document.createElement("p");
    const cardImage = document.createElement("img");
    const price = document.createElement("p");

    // 2. Style the Element
    cardContainer.className =
      "w-[350px] h-[500px] overflow-hidden flex flex-col gap-[20px] bg-[#D3D3D3] rounded-[10px] p-[10px] ";
    textContainer.className =
      "p-[10px] border-t-[1px] border-white flex flex-col gap-[10px] ";
    cardImage.className = "h-[60%] object-contain";
    cardTitle.className = "text-[13px] font-bold";
    cardDescription.className = "text-[10px] ";

    // 3. Insert Data
    cardTitle.textContent = data.title;
    cardDescription.textContent = data.description.slice(0, 120);
    cardImage.src = data.image;
    price.textContent = `$${data.price}`;

    // 4. Add the Elements to the Html
    cardContainer.append(cardImage);
    textContainer.append(cardTitle);
    textContainer.append(cardDescription);
    textContainer.append(price);

    cardContainer.append(textContainer);
    productContainer.append(cardContainer);
  });
};

// 4. Calls the functions
const init = async () => {
  await fetchData("https://fakestoreapi.com/products");
  displayData();
};

// 5. Call the Main function
init();

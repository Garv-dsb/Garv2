// We need to upload the data , recieve the data , sent the data -  over the network we have to need some ways or method

// fetch() - Fetch is the Method that is used to fetch the data from the Url and they return the Promise , - if the Promise if fulfill it gives the response else it's not

// and fetch() is the asynchronous function - that is used to fetch() the data or upload the data

// there are different HTTP methods - GET , POST , PUT , PATCH , DELETE - they can be done with the help of the fetch options

// syntax of the fetch is fetch(url , [opt]);
// without the options is just the GET API

// let's see the example

const fetchData = async (url) => {
  const data = await fetch(url);

  // JSON DATA
  const jsonData = await data.json();

  console.log(jsonData);
};

fetchData(
  "https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits",
);

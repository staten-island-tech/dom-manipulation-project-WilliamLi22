//Using JavaScript you will allow users to input information into a form. The form will then push data from a JavaScript object into the HTML through DOM manipulation. The project must contain the following
//-Create an object called “DOMSelectors” to hold your DOM Selectors
//-Create a function that creates an object and calls the following functions
//-Create a function that injects the newly created object into the DOM
//-Create a function that clears the input fields after injecting the object
//-Create a function to remove an object after they have been created

const DOMSelectors = {
  name: document.getElementById("name"),
  likes: document.getElementById("likes"),
  dislikes: document.getElementById("dislikes"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  submit: document.querySelector("#form"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(e);
});

function makeCard() {}
//step one take input and save to variable consolelog to check
//step two create object from data
//step three push data into html

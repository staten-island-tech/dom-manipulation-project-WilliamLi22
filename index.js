//Using JavaScript you will allow users to input information into a form. The form will then push data from a JavaScript object into the HTML through DOM manipulation. The project must contain the following
//-Create an object called “DOMSelectors” to hold your DOM Selectors
//-Create a function that creates an object and calls the following functions
//-Create a function that injects the newly created object into the DOM
//-Create a function that clears the input fields after injecting the object
//-Create a function to remove an object after they have been created

const DOMSelectors = {
  name: document.querySelector("#name"),
  likes: document.querySelector("#likes"),
  dislikes: document.querySelector("#dislikes"),
  url: document.getElementById("url"),
  display: document.getElementById("display"),
  submit: document.querySelector("#form"),
  text: document.querySelector("#text"),
  remove: document.querySelector("#remove"),
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = DOMSelectors.name.value;
  let Profile = {};

  Profile.name = name;

  Profile.url = DOMSelectors.url.value;

  Profile.likes = DOMSelectors.likes.value;

  Profile.dislikes = DOMSelectors.dislikes.value;

  DOMSelectors.name.value = "";
  DOMSelectors.likes.value = "";
  DOMSelectors.dislikes.value = "";
  DOMSelectors.url.value = "";

  console.log(Profile);

  makeCard(Profile);
});

document.getElementById("name");

function makeCard(Profile) {
  DOMSelectors.submit.insertAdjacentHTML(
    "afterend",
    `<div class="character-card">
    <h2>${Profile.name}</h2>
    <img src="${Profile.url}" alt="">
    <h3>${Profile.likes}</h3>
    <h3>${Profile.dislikes}</h3>
</div>);`
  );
}

//make the card
//get delete button
//querySelectorAll returns node list
//for each button add event listener
// function(e) event.target

/* DOMSelectors.submit.addEventListener("submit", function () {
  makeCard(DOMSelectors.display, DOMSelectors.text);
}); */

//step one take input and save to variable consolelog to check
//step two create object from data
//step three push data into html

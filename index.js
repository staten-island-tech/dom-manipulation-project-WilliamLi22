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
};

DOMSelectors.submit.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = DOMSelectors.name.value;
  let Character = {};
  Character.name = name;
  console.log(Character);

  let likes = DOMSelectors.likes.value;
  let characterLikes = {};
  characterLikes.likes = likes;
  console.log(characterLikes);

  let dislikes = DOMSelectors.dislikes.value;
  let characterDislikes = {};
  characterDislikes.dislikes = dislikes;
  console.log(characterDislikes);

  DOMSelectors.name.value = "";
  DOMSelectors.likes.value = "";
  DOMSelectors.dislikes.value = "";
  DOMSelectors.url.value = "";
});

document.getElementById("name");

function makeCard() {
  DOMSelectors.submit.addEventListener("submit", function () {
    DOMSelectors.submit.insertAdjacentHTML("afterend", "<h2>Tesing</h2>");
  });
}

makeCard();
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

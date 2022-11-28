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
  submit: document.querySelector("#form"),
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
  eraseCard();
});

document.getElementById("name");

function makeCard(Profile) {
  DOMSelectors.submit.insertAdjacentHTML(
    "afterend",
    `<div class="character-card">
    <h2>Name: ${Profile.name}</h2>
    <img src="${Profile.url}" alt="">
    <h3>Likes: ${Profile.likes}</h3>
    <h3>Dislikes: ${Profile.dislikes}</h3>
    <button class="removeBtn">Remove</button></div>
    </div>);`
  );
}

function eraseCard() {
  const remove = document.querySelectorAll(".removeBtn");
  remove.forEach((formValue) => {
    formValue.addEventListener("click", (e) => {
      e.target.parentElement.remove();
    });
  });
}

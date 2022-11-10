//Using JavaScript you will allow users to input information into a form. The form will then push data from a JavaScript object into the HTML through DOM manipulation. The project must contain the following
//-Create an object called “DOMSelectors” to hold your DOM Selectors
//-Create a function that creates an object and calls the following functions
//-Create a function that injects the newly created object into the DOM
//-Create a function that clears the input fields after injecting the object
//-Create a function to remove an object after they have been created

/* const DOMSelectors = {
  button: document.getElementById("btn"),
  text: document.querySelector("#text"),
  points: document.querySelectorAll(".point"),
  box: document.getElementById("big-black-box"),
};

function backgroundAndText(background, text) {
  background.style.backgroundColor = "red";
  text.textContent = "This is now a big bigger red box";
  text.style.fontSize = "40px";
  //https://developer.mozilla.org/en-US/docs/Web/CSS/Reference#index use for more properties
}

DOMSelectors.button.addEventListener("click", function () {
  backgroundAndText(DOMSelectors.box, DOMSelectors.text);
});

function changeLi() {
  let pointIndex = 1;
  DOMSelectors.points.forEach((point) => {
    point.addEventListener("click", function () {
      point.textContent = `Hello I am point ${pointIndex}`;
      pointIndex++;
    });
  });
}

changeLi(); */

const DOMSelectors = {
  button: document.getElementById("btn"),
  box: document.getElementById("container-box"),
  input: document.querySelector(`#input`),
};

/* const cat = "meow";

DOMSelectors.box.insertAdjacentHTML(
  "beforebegin",
  `<h1>We are an ${cat} </h1>`
);
 */

DOMSelectors.button.addEventListener("click", function () {
  let input = DOMSelectors.input.value;
  DOMSelectors.box.insertAdjacentHTML("beforeend", `<p> ${input}</p>`);
  DOMSelectors.input.value = "";
});

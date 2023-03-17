
// Establish grid container
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
document.body.appendChild(gridContainer);

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const createDiv = document.createElement("div")
    createDiv.classList.add("inner-div");
    gridContainer.appendChild(createDiv);
  }
}

// Loads grid into grid container on page load
document.body.onload = createGrid();

// Links users choice buttons
const normalChoice = document.getElementById("normal");
const psychadelicChoice = document.getElementById("psychadelic");
var userChoice = "normal";
normalChoice.addEventListener("click", () => {
  userChoice = "normal";
  console.log(userChoice);
})
psychadelicChoice.addEventListener("click", () => {
  userChoice = "psychadelic";
  console.log(userChoice);
})

// Recognizes mouseover event on all inner div's
document.querySelectorAll(".inner-div").forEach(item => {
  item.addEventListener("mouseover", () => {
    colorChange();
  });
});

function colorChange() {
  if (userChoice === "normal") {
    console.log("change color normally")
  } else {
    console.log("change color colorfully")
  }
}
// Establish grid container
const gridContainer = document.createElement("div");
document.body.appendChild(gridContainer);

// Load grid into grid container on page load
document.body.onload = createNormalGrid();

// Retrieve erase grid button
const eraseGrid = document.getElementById("erase");
eraseGrid.addEventListener("click", erase);

// Retrieve color choice buttons
var userChoice = "normal";
const normalChoice = document.getElementById("normal");
normalChoice.addEventListener("click", () => {
  userChoice = "normal";
})
const psychadelicChoice = document.getElementById("psychadelic");
psychadelicChoice.addEventListener("click", () => {
  userChoice = "psychadelic";
})

// Retrieve grid choice buttons
var gridChoice = "";
const gridChoiceNormal = document.getElementById("normal-grid");
gridChoiceNormal.addEventListener("click", () => {
  gridChoice = "normal";
  changeGrid();
});
const gridChoiceBig = document.getElementById("big-grid");
gridChoiceBig.addEventListener("click", () => {
  gridChoice = "big";
  changeGrid();
});

// Recognizes mouseover event on all inner div's and colors
// div based on user choice
function changeColor() {
  document.querySelectorAll(".inner-div").forEach(item => {
    item.addEventListener("mouseover", (e) => {
      if (userChoice === "normal") {
        e.target.style.backgroundColor = '#707070';
      } else {
        const psychadelicPallete = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
        const randomColor = Math.floor(Math.random() * psychadelicPallete.length);
        e.target.style.backgroundColor = psychadelicPallete[randomColor];
      }
    });
  });
}

function createNormalGrid() {
  gridContainer.classList.add("normal-grid-container");
  for (let i = 0; i < 256; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("inner-div");
    gridContainer.appendChild(createDiv);
  }
  changeColor();
}

function createBigGrid() {
  gridContainer.classList.add("big-grid-container");
  for (let i = 0; i < 1024; i++) {
    const createDiv = document.createElement("div");
    createDiv.classList.add("inner-div");
    gridContainer.appendChild(createDiv);
  }
  changeColor();
}

function changeGrid() {
  const divs = document.querySelectorAll(".inner-div");
  divs.forEach(item => {
    item.remove();
  });
  gridContainer.className = " ";
  if (gridChoice === "normal") {
    createNormalGrid();
  } else {
    createBigGrid();
  }
}

function erase() {
  document.querySelectorAll(".inner-div").forEach(item => {
  const gridItem = item;
  gridItem.style.backgroundColor = "white";
  });
}
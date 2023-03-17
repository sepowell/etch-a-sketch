// Establish grid container
const gridContainer = document.createElement("div");
gridContainer.classList.add("normal-grid-container");
document.body.appendChild(gridContainer);

function createNormalGrid() {
  for (let i = 0; i < 256; i++) {
    const createDiv = document.createElement("div")
    createDiv.classList.add("inner-div");
    gridContainer.appendChild(createDiv);
  }
}

// Loads grid into grid container on page load
document.body.onload = createNormalGrid();

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

// // Changes grid based on user choice
// const gridChoiceNormal = document.getElementById("normal-grid");
// const gridChoiceBig = document.getElementById("big-grid");
// var gridChoice = "";
// gridChoiceNormal.addEventListener("click", () => {
//   gridChoice = "normal";
//   changeGrid();
// });
// gridChoiceBig.addEventListener("click", () => {
//   gridChoice = "big";
//   changeGrid();
// });

// function changeGrid() {
//   document.querySelectorAll(".inner-div").forEach(item => {
//     item.remove();
//   });
//   if (gridChoice === "normal") {
//     createNormalGrid();
//   } else {
//     createBigGrid();
//   }
// }

// Recognizes mouseover event on all inner div's and colors
// div based on user choice
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

// Erases grid
const eraseGrid = document.getElementById("erase");
eraseGrid.addEventListener("click", erase);

function erase() {
  document.querySelectorAll(".inner-div").forEach(item => {
  const gridItem = item;
  gridItem.style.backgroundColor = "white";
  });
}
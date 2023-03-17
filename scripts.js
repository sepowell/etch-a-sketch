
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

// loads grid into grid container
document.body.onload = createGrid();

//recognizes mouse over on all inner div's
document.querySelectorAll(".inner-div").forEach(item => {
  item.addEventListener("mouseover", () => {
  console.log("omg");
  });
});

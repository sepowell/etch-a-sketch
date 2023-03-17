
// Establish grid container
const gridContainer = document.createElement("div");
gridContainer.classList.add("grid-container");
document.body.appendChild(gridContainer);

document.body.onload = createGrid();

function createGrid() {
  for (let i = 0; i < 256; i++) {
    const createDiv = document.createElement("div")
    createDiv.classList.add("inner-div");
    gridContainer.appendChild(createDiv);
  }
}
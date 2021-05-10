const gridContainer = document.querySelector("#grid-container");
const resetButton = document.querySelector("#reset-button");
const eraserButton = document.querySelector("#eraser-button")

window.addEventListener("load", setDefaultGrid);
resetButton.addEventListener("click", changeSize);
eraserButton.addEventListener("click", clearGrid);

function setDefaultGrid(){
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size){
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (let i = 0; i < size * size; i++) {
      const gridElement = document.createElement("div");
      gridElement.classList = "grid-element";
      gridElement.addEventListener("mouseover", changeColor);
      gridContainer.appendChild(gridElement);
    }
  }
   
  function changeColor(e){
    e.target.style.backgroundColor = `Red`;
  }
  function clearGrid(e){
  e.target.style.backgroundColor = `White`;
  }
  function changeSize(){
      let newSize = prompt("Change Grid Size");

      if (newSize !== null) {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
          alert("Enter a number from 1-64 range");
          changeSize();
        } else {
          setGridSize(newSize);
          fillGrid(newSize);
        }
      } 
}

  
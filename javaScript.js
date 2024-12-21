const gridContainer = document.querySelector(".gridContainer");
let rows;
let columns;
let numberOfRows;
let numberOfColumns;

const divs = document.querySelectorAll("div");

const buttonsContainer = document.createElement("div");
buttonsContainer.classList.add("buttonsContainer");

const newGridButton = document.createElement("button");
newGridButton.textContent = "Create New Grid";
newGridButton.classList.add("newGridButton");

const rubberButton = document.createElement("button");
rubberButton.textContent = "Rubber";
rubberButton.classList.add("rubberButton");

const drawButton = document.createElement("button");
drawButton.textContent = "Draw";
drawButton.classList.add("drawButton");

document.body.appendChild(buttonsContainer);
buttonsContainer.appendChild(drawButton);
buttonsContainer.appendChild(newGridButton);
buttonsContainer.appendChild(rubberButton);

function createGrid(numberOfSquares){
        for (numberOfRows = 1; numberOfRows <= numberOfSquares; numberOfRows ++){
            rows = document.createElement("div");
            rows.classList.add("rows");
    
        for (numberOfColumns = 1; numberOfColumns <= numberOfSquares; numberOfColumns ++){
            columns = document.createElement("div");
            columns.classList.add("columns");
            rows.appendChild(columns);
            gridContainer.appendChild(rows);
        }
        }

    draw()
}

function draw() {
    divs.forEach((div) => {
        div.addEventListener("mouseover", (e) => {
            e.target.style.cssText = "background : yellow"
        })
    })
}


function rubber(){
    divs.forEach((div) => {div.addEventListener("mouseover", (e) => {
        e.target.style.cssText = "background : rgb(40, 36, 54)"
        })
    })
}


createGrid(16)

newGridButton.addEventListener("click", () => {
    gridContainer.innerHTML = "";
    getNumber = prompt("Enter The Number Of Squares");
    if (getNumber >= 100){
        alert("Please enter a number less than 100");
        newGrid = 16;
    }
    else if (getNumber < 1){
        alert("Sorry, The Number must be greater than 0")
        newGrid = 16;
    }
    else if (getNumber >= 1 || getNumber < 100 ){
        newGrid = getNumber
    }
    else{
        alert("Please enter a number");
        newGrid = 16;
    }
    createGrid(newGrid);
})

rubberButton.addEventListener("click", rubber);
drawButton.addEventListener("click", draw)

//global variable to get div .container
const container = document.getElementById("gridContainer");
const gridSizeChanger = document.getElementById("gridSizeChange");
const sizeValue = document.getElementById("sizeValue");

function makeGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for(let i = 0; i < size * size; i++) {
        let cell = document.createElement("div");
        cell.addEventListener('mouseover', (e) =>{
            console.log(e);
            e.target.style.backgroundColor = 'black';
        })
        container.appendChild(cell).className = "grid-cell";
    }
}

function removeAllChildNodes(parent){
    while(parent.firstChild){
        parent.removeChild(parent.firstChild);
    }
}

gridSizeChanger.oninput = () => {
    let sizeGrid = gridSizeChanger.value;
    sizeValue.textContent = sizeGrid;
    removeAllChildNodes(container);
    makeGrid(sizeGrid);
}
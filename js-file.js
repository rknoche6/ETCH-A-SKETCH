 
const container = document.getElementById("container");
  /*create grid*/
  
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      cell.style.backgroundColor= "grey";
      cell.innerText = (c + 1);
      container.appendChild(cell).className = "grid-item";
    };
    hover()
};
  
makeRows(16, 16);
  
/*Adds functionality to change colors when being hovered over*/
function colorChange() {
    this.style.backgroundColor = "red";
}

function hover(){
const select_cells = document.getElementsByClassName("grid-item");
for (var i = 0; i < select_cells.length; i++) {
    select_cells.item(i).addEventListener('mouseover', colorChange); 
}
}   

/*Adds functionality to reset everything*/
function resetToini(){
    while (container.firstChild){
        container.removeChild(container.firstChild);
    }
    const new_size = window.prompt("How many boxes per row?", 16);
    makeRows(new_size, new_size);
    hover()
}


const reset = document.getElementById("reset");
    reset.addEventListener('click', resetToini);


  
  
  
  
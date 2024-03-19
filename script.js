//global variables 
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
    function addR() {
    let grid = document.getElementById("grid");
    let newrow = grid.insertRow();
    numRows++;

    if (numCols==0){
        numCols = 1;
    }
    for(let i = 0; i < numCols; i++){
        let newcell = newrow.insertCell(); //inserting the new cells 
        newcell.addEventListener("click", function(){//for each cell, this will use the event listen
        newcell.style.backgroundColor = colorSelected;    
        });
    } 
}

// Add a column
function addC() {
    let grid = document.getElementById("grid");
    numCols++;
    if(numRows==0){
        addR();
    } else{
        for(let i = 0; i < grid.rows.length; i++){
            let newrow = grid.rows[i];
            let newcell = newrow.insertCell(0);
            newcell.addEventListener("click", function() {
                newcell.style.backgroundColor = colorSelected;
            });
        }
    }
}

// Remove a row
function removeR() {
    let grid = document.getElementById("grid");
    if (numRows > 0){
        grid.deleteRow(numRows - 1); //subtracts by 1 to delete a row
        numRows--; 
    }

}

// Remove a column
function removeC() {
 let grid = document.getElementById("grid");
 if (numCols > 0){
    for (let i = 0; i < numRows; i++){
    grid.rows[i].deleteCell(-1); //subtracts by 1 to delete a row
    }
    numCols--; 
}
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    
}

// Fill all uncolored cells
function fillU(){
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr"); // all rows
    for (let i = 0; i < rows.length; i++) { //goes through grid 
        let cells = rows[i].getElementsByTagName("td"); // selects the cells 
        for (let j = 0; j < cells.length; j++) {
            if(cells[j].style.backgroundColor == "" | cells[j].style.backgroundColor == "white") 
            {
                cells[j].style.backgroundColor = colorSelected; // changes background color of cell
            } 
        }
    } 
}

function fillAll(){
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr"); // all rows by tag
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td"); 
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = colorSelected; 
        }
    }
}

// Clear all cells
function clearAll(){
    let grid = document.getElementById("grid");
    let rows = grid.getElementsByTagName("tr"); 
    for (let i = 0; i < rows.length; i++) { //iterates through grid to get cells
        let cells = rows[i].getElementsByTagName("td"); 
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = "white"; 
        }
    }
}
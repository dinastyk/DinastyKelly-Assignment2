// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    let newrow = table.insertRow();
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
    let table = document.getElementById("grid");
    numCols++; //incrementing
    if (numRows==0){
        addR();
    } 
    else{
    for (let i = 0; i < table.rows.length; i++){
        let newrow = table.rows[i];
       let newcell=table.newrow[i].insertCell(0); //adding cells
        newcell.addEventListener("click", function(){
            newcell.style.backgroundColor = colorSelected; //adds the color 
     
        });
    }
}
}

// Remove a row
function removeR() {
    let table = document.getElementById("grid");
    if (numRows > 0){
        table.deleteRow(numRows - 1); //subtracts by 1 to delete a row
        numRows--; 
    }

}

// Remove a column
function removeC() {
 let table = document.getElementById("grid");
if (numCols> 0){
    for (let i =0; i < numRows; i++){
    table.rows[i].deleteCell(-1); //subtracts by 1 to delete a row
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
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr"); // Get all of the rows
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
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr"); // all rows by tag
    for (let i = 0; i < rows.length; i++) {
        let cells = rows[i].getElementsByTagName("td"); 
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = colorSelected; 
        }
    }
}

// Clear all cells
function clearAll(){
    let table = document.getElementById("grid");
    let rows = table.getElementsByTagName("tr"); 
    for (let i = 0; i < rows.length; i++) { //iterates through grid to get cells
        let cells = rows[i].getElementsByTagName("td"); 
        for (let j = 0; j < cells.length; j++) {
            cells[j].style.backgroundColor = "white"; 
        }
    }
}
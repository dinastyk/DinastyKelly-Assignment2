// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() {
    let table = document.getElementById("grid");
    let newrow = table.inserRow();
    let newcell =newrow.insertCell();
    numRows++;
    numCols++;
    
    for(let i = 0; i < numCols; i++){
        newcell = newrow.insertCell(); //inserting the new cells 
    }

    for (let i = 0; i < numCols; i++){ //for each cell, this will use the event listener for clicks
        newcell = newrow.insertCell();
        newcell.addEventListener("click", function(){
        newcell.style.backgroundColor = colorSelected;
    });
    } 
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}
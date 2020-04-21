// Select color input
const colorInput = document.getElementById('colorPicker');
// Select size input
const heightInput = document.getElementById('inputHeight');
const widthInput = document.getElementById('inputWidth');
// Select table for appending children
const table = document.getElementById('pixelCanvas');

// When size is submitted by the user, call makeGrid()
const form = document.getElementById('sizePicker');
form.addEventListener('submit', function (e) {
  e.preventDefault();
  makeGrid();
});

function makeGrid() {
  // Get the values for grid size from user
  let heightChoice = heightInput.value;
  let widthChoice = widthInput.value;
  // Reset the grid on Submit
  table.innerHTML = '';
  // Add the rows
  for (let i = 0; i < heightChoice; i++) {
    let row = document.createElement('tr');
    table.appendChild(row);
    // Add the columns
    for (let j = 0; j < widthChoice; j++) {
      let column = document.createElement('td');
      row.appendChild(column);
      // Color the cells
      column.addEventListener('click', function (e) {
        let colorChoice = colorInput.value;
        column.style.backgroundColor = colorChoice;
      });
    }
  }
}

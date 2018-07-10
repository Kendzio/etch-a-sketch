
function createGrid(numElementsInOneAxis = 16) {
	let my_grid = document.getElementById('grid');
		// change style of grid-template-columns and rows.
		my_grid.style.gridTemplateColumns = `repeat(${numElementsInOneAxis}, 1fr)`;
		my_grid.style.gridTemplateRows = `repeat(${numElementsInOneAxis}, 1fr)`;
	for (let i=0; i<(numElementsInOneAxis*numElementsInOneAxis); i++){
		let div = document.createElement('div');
		div.classList.add("grid_elements")
		div.addEventListener("mouseenter", function() {
			div.style.backgroundColor = getRandomColor();
		})
		my_grid.appendChild(div);
}
}

function resetGrid() {
	let my_grid = document.getElementById('grid');
	while (my_grid.lastChild) {
		my_grid.removeChild(my_grid.lastChild);
	}
}

function getRandomColor() {
  let letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

/*function makeGridResponsive() {

	elements = document.querySelectorAll('div');

	elements.forEach(function(elem) {
		elem.addEventListener("mouseenter", function() {
			elem.classList.add("black");
		})
	})
}
*/

createGrid();

// make button reset work(reseting grid, prompting user for number of elements in one axis)
let reset = document.getElementById('reset');


reset.addEventListener("click", function(){
	let numElementsInOneAxis = prompt("What size (NumXnum)? Enter num:");
	numElementsInOneAxis = parseInt(numElementsInOneAxis);
	if (isNaN(numElementsInOneAxis)){
		numElementsInOneAxis = 16;
	}

	resetGrid();
	createGrid(numElementsInOneAxis);

})
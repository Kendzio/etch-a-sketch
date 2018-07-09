
my_grid = document.getElementById('grid');
for (let i=0; i<256; i++){
	let div = document.createElement('div');
	div.classList.add("grid_elements")
	my_grid.appendChild(div);
}

elements = document.querySelectorAll('div');

elements.forEach(function(elem) {
	elem.addEventListener("mouseenter", function() {
		elem.classList.add("black");
	})
})
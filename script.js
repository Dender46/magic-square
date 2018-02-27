var cols = 3;
var grid, size;
var sumRows, sumCols;

const inputSize = document.getElementById('size');
inputSize.addEventListener('change', handleSizeInput);

function setup() {
	createCanvas(900, 900);
	background(255)

	textAlign(CENTER, CENTER);
	fill(color('#353535'));

	makeNewGrid();
}

function handleSizeInput() {
	if (inputSize.value < 3)
		inputSize.value = 3;
	if (inputSize.value > 31)
		inputSize.value = 31;

	makeNewGrid();
}

function makeNewGrid() {
	cols = inputSize.value;
	n = inputSize.value;
	size = width / cols * 0.99;

	grid = new Array(n);
	sumRows = new Array(n+1);
	sumCols = new Array(n+1);

	for (let i = 0; i < n; i++) { 
		grid[i] = new Array(n);
		sumRows[i] = 0;
		sumCols[i] = 0;
	}

	drawGrid();
	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			let I = i+1;
			let J = j+1;

			grid[i][j] = n * ((I + J - 1 + Math.floor(n / 2)) % n) + ((I + 2 * J - 2) % n) + 1;
			sumRows[i] += grid[i][j];
			text(grid[i][j], i*size+3, j*size+3, size, size)
		}
	}


	for (let i = 0; i < n; i++)
		for (let j = 0; j < n; j++)
			sumCols[i] += grid[j][i];

}

function drawGrid() {
	background(255)
	textSize(300 / cols)
	for (let i = 0; i < cols; i++) {
		for (let j = 0; j < cols; j++) {
			push();
				noFill()
				strokeWeight(3);
				stroke(color('#FF9999'));
				rect(i*size+3, j*size+3, size, size);
			pop();
		}
	}
}
// 1. Use document.getElementById() and
// assign the .onclick event to #color-button

// 2. Write a function, named changeColor,
// that is called when #color-button is clicked

// 3. Inside of the function changeColor, use variables
// to store the <input> values from #red, #green, and #blue
// - Use .value to get the values from the inputs
// HINT: var red = document.getElementById('red').value;

// 4. Create a variable, named colorStr, which concatenates
// the above red, green, and blue variables into the format:
// rgb(x, y, z)
// - If the user enters: 100, 150, and 200, colorStr should be:
// rgb(100, 150, 200)

// 5. Use .innerHTML to change the text inside of #colorful-text
// to colorStr

// 6. Use .style.background to change the background of #wrapper
// to colorStr

// -------------------------------------------------------
// pseudo code:

// box1-red
// box2-green
// box3-blue
// if you write 0-255 in each boxes
// click 'change the color' button
// background color changes to the number code in the box


// Question: in naming variables, can I use numbers?
// for example: var input1, var input2?

var inputA = document.getElementById('red')
var inputB = document.getElementById('green')
var inputC = document.getElementById('blue')

var changeColorBtn = document.getElementById('color-button')
changeColorBtn.onclick = changeColor;

function changeColor(){
	var inputA = document.getElementById('red').value = x;
	var inputB = document.getElementById('green').value = y;
	var inputC = document.getElementById('blue').value = z;
	
	var colorStr = 'rgb(x,y,z)'
	var rgbResult = document.getElementById('colorful-text').innerHTML = colorStr;
	changeColorBtn.style.background = 'rgb(x,y,z)';
}


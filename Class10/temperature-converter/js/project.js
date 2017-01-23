
document.querySelector('.button').onclick = convertTemp;

function convertTemp (){
	var cValue = document.getElementById('box1').value;
		cValue = parseInt(cValue);
	var fValue = document.getElementById('box2').value;
		fValue = parseInt(fValue);

	var cToF = cValue * 1.8 + 32;
	document.getElementById('box2').value = cToF;

	var fToC = (fValue - 32) * 5 / 9;
	document.getElementById('box1').value = fToC;

	console.log('work?')
	// I think the problem here is that I am asking each box
	// to have 2 answers.
	// It works when I only have var cToF by itself, or just var fToC,
	// but when 2 are both shown, the number becomes NaN
}

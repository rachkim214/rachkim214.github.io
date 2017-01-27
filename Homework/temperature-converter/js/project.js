
document.querySelector('.button').onclick = convertTemp;

function convertTemp (){
	var cValue = document.getElementById('box1').value;
		cValue = parseInt(cValue);
		console.log('cValue', cValue)
	var fValue = document.getElementById('box2').value;
		fValue = parseInt(fValue);
		console.log('fValue', fValue);

	var celciusTemp;

	if (!isNaN(cValue)) {	
		var cToF = cValue * 1.8 + 32;
		document.getElementById('box2').value = cToF;
		celciusTemp = cValue;

		console.log('celcius to f conversion');

	} 

	if (!isNaN(fValue)) {	
		var fToC = (fValue - 32) * 5 / 9;
		document.getElementById('box1').value = fToC;

		celciusTemp = fToC;

	}

	if (celciusTemp < 0) {
		$('body').css('background', 'blue');
	} else if (celciusTemp > 30){
		$('body').css('background', 'red');
	} else {
		$('body').css('background', 'purple');
	}

	console.log('work?')
	// I think the problem here is that I am asking each box
	// to have 2 answers.
	// It works when I only have var cToF by itself, or just var fToC,
	// but when 2 are both shown, the number becomes NaN
}

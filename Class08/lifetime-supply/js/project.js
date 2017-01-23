document.getElementById('click-me').onclick = calculateDrinks;
function calculateDrinks () {
	// console.log('drinkdrunk');
	var maxAge = document.getElementById('max-age').value;
	var currentAge = document.getElementById('age').value;
	var numDrinks = document.getElementById('num-per-day').value;
	var drinkType = document.getElementById('item').value;
	
	// console.log(maxAge, currentAge, numDrinks, drinkType);
	// console.log('abc');

	var lifetimeDrinks = (maxAge - currentAge) * 365 * numDrinks;
	// console.log('lifetimeDrinks');

	document.getElementById('solution').innerHTML = lifetimeDrinks;
	document.getElementById('drink').innerHTML = drinkType;
}
$(document).ready(function () {

	var lights = 'on';
	$('#lightswitch').click(function(){
	
		// if (lights == 'on') {
		// 	$('#lightswitch').addClass('switch-off');
		// 	$('#lightswitch').removeClass('switch-on');
			
		// 	$('body').addClass('lights-off');

		// 	lights = 'off';
		// } else {
		// 	$('#lightswitch').removeClass('switch-off');
		// 	$('#lightswitch').addClass('switch-on');

		// 	$('body').removeClass('lights-off');

		// 	lights = 'on';
		// }

		if (lights == 'on') {
			lights = 'off';
		} else {
			lights = 'on';
		}
			$('#lightswitch').toggleClass('switch-on');
			$('#lightswitch').toggleClass('switch-off');
			$('body').toggleClass('lights-off');


	})

})


var getTime = function() {
	//document.getElementById('clock').innerHTML = new Date().toLocaleTimeString();
	$('#clock').html(new Date().toLocaleTimeString());
	setTimeout(getTime, 1000);
}

var updateBackground = function(data) {
	var temp = data['daily'].temperatureMax; 
	var icon;

	if (temp < 60) icon = 'cold';
	else if (temp >= 90) icon = 'hot';
	else if (temp >= 80) icon = 'warm';
	else if (temp >= 70) icon = 'nice';
	else icon = 'chilly';

	$('body').addClass(icon);
}


var getTemp = function() {
	var key = '361ead2f6a85c726334fc78f16c74e19';
	var link = 'https://api.forecast.io/forecast/'+key+'/35.300399,-120.662362?callback=?';
	$(document).ready(function() {
		$.getJSON (link, function(data) {
			$('#forecastLabel').html(data['daily'].summary);			
			$('#forecastIcon').attr('src', 'img/'+data['daily'].icon+'.png');
			updateBackground(data);
		});
	});
}

getTemp();
setTimeout(getTime, 1000);


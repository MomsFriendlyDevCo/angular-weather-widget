var app = angular.module('app', [
	'uiWeatherWidget',
]);

app.config(function(uiWeatherWidgetProvider) {
	uiWeatherWidgetProvider.settings.apiKey = '1d244f345f1829d8';
	uiWeatherWidgetProvider.settings.location = 'australia/sydney';

	// Uncomment the next line to see a sample Radar image
	// Couple this with something like https://github.com/MomsFriendlyDevCo/bom to pull in a Weather radar
	// uiWeatherWidgetProvider.settings.radar = 'http://via.placeholder.com/512x512';
})

app.controller('demoCtrl', function($scope) {
});

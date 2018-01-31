var app = angular.module('app', [
	'uiWeatherWidget',
]);

app.config(function(uiWeatherWidgetProvider) {
	uiWeatherWidgetProvider.settings.apiKey = '1d244f345f1829d8';
	uiWeatherWidgetProvider.settings.location = 'australia/sydney';
})

app.controller('demoCtrl', function($scope) {
});

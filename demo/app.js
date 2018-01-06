var app = angular.module('app', [
	'uiWeatherWidget'
]);

app.controller("demoCtrl", function($scope) {
	var date = moment();

	$scope.data = [
		{
			temp: 31.4,
			tempMin: 18,
			tempMax: 32,
			id: 800,
			description: 'Clear sky'
		},
		{
			tempMin: 17,
			tempMax: 33,
			id: 800,
			description: 'Clear sky'
		},
		{
			tempMin: 21,
			tempMax: 32,
			id: 230,
			description: 'Possible thunderstorm'
		},
		{
			tempMin: 21,
			tempMax: 34,
			id: 230,
			description: 'Possible thunderstorm'
		},
		{
			tempMin: 20,
			tempMax: 30,
			id: 804,
			description: 'Cloudy'
		},
		{
			tempMin: 17,
			tempMax: 33,
			id: 800,
			description: 'Clear sky'
		}
	];
 });
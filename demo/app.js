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
 			date: date.add(1, 'd').toDate(),
 			tempMin: 17,
 			tempMax: 33,
 			id: 800,
 			description: 'Clear sky'
 		},
 		{
 			date: date.add(1, 'd').toDate(),
 			tempMin: 21,
 			tempMax: 32,
 			id: 800,
 			description: 'Clear sky'
 		},
 		{
 			date: date.add(1, 'd').toDate(),
 			tempMin: 21,
 			tempMax: 34,
 			id: 800,
 			description: 'Clear sky'
 		},
 		{
 			date: date.add(1, 'd').toDate(),
 			tempMin: 22,
 			tempMax: 34,
 			id: 800,
 			description: 'Clear sky'
 		},
 		{
 			date: date.add(1, 'd').toDate(),
 			tempMin: 17,
 			tempMax: 33,
 			id: 800,
 			description: 'Clear sky'
 		}
 	];
 });
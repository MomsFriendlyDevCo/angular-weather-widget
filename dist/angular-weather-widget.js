'use strict';

/**
* Angular-Weather-Widget
* Compact weather widget that is toggle via. a dropdown.
*
* @param {string} [class] Optional class style to apply
*/

angular.module('uiWeatherWidget', ['moment']).component('uiWeatherWidget', {

	bindings: {
		api: '@',
		class: '@?',
		data: '<'
	},

	controller: ["$scope", "$attrs", function controller($scope, $attrs) {
		var $ctrl = this;
		var moment = require('moment');

		$ctrl.$attrs = $attrs || {};

		$ctrl.getDay = function (offset) {
			var date = moment().add(offset, 'd');
			return date.format('dddd');
		};
	}],

	template: '\n\t\t\t<div class="dropdown">\n\t\t\t\t<button class="dropdown-toggle btn btn-primary" data-toggle="dropdown">\n\t\t\t\t\t<i class="wi wi-wu-{{ $ctrl.data.forecast.simpleforecast.forecastday[0].icon }}" ng-if="$ctrl.api == \'wu\'"></i>\n\t\t\t\t\t<i class="wi wi-owm-{{ $ctrl.data }}" ng-if="$ctrl.api == \'owm\'"></i>\n\t\t\t\t\t<i class="wi wi-dsn-{{ $ctrl.data }}" ng-if="$ctrl.api == \'dsn\'"></i>\n\t\t\t\t\t{{ $ctrl.data[0].temp }}\xB0C\n\t\t\t\t</button>\n\n\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t<li class="media" ng-if="$ctrl.api == \'wu\'" ng-repeat="day in $ctrl.data.forecast.simpleforecast.forecastday">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-fw wi-wu-{{ day.icon }}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t<span class="text-danger">{{ day.high.celsius }}\xB0C</span>\n\t\t\t\t\t\t\t\t<span class="text-primary">{{ day.low.celsius }}\xB0C</span>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t{{ ::$ctrl.getDay($index) }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class="media" ng-if="$ctrl.api == \'owm\'" ng-repeat="day in $ctrl.data">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-fw wi-owm-{{ day.id }}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class="media" ng-if="$ctrl.api == \'dsn\'" ng-repeat="day in $ctrl.data">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-fw wi-dsn-{{ day.id }}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t'
});
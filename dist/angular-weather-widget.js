'use strict';

/**
* Angular-Weather-Widget
* Compact weather widget that is toggle via. a dropdown.
*
* @param {string} [api] Specify source of data (ie. Weather Underground)
* @param {string} [title] Optional title for component (ie. Brisbane 5 day forecast)
*/

angular.module('uiWeatherWidget', []).component('uiWeatherWidget', {

	bindings: {
		api: '@',
		data: '<',
		title: '@?'
	},

	controller: ["$scope", "$attrs", function controller($scope, $attrs) {
		var $ctrl = this;

		$ctrl.$attrs = $attrs || {};
		$ctrl.limit = $ctrl.limit || 5;

		$ctrl.getDay = function (offset) {
			var date = moment().add(offset, 'd');
			return date.format('dddd');
		};
	}],

	template: '\n\t\t\t<div class="dropdown">\n\t\t\t\t<button class="dropdown-toggle btn btn-primary" data-toggle="dropdown">\n\t\t\t\t\t<i class="wi wi-wu-{{ $ctrl.data.forecast.simpleforecast.forecastday[0].icon }}" ng-if="$ctrl.api == \'wu\'"></i>\n\t\t\t\t\t<i class="wi wi-owm-{{ $ctrl.data }}" ng-if="$ctrl.api == \'owm\'"></i>\n\t\t\t\t\t<i class="wi wi-dsn-{{ $ctrl.data }}" ng-if="$ctrl.api == \'dsn\'"></i>\n\t\t\t\t</button>\n\n\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t<li class="dropdown-header" ng-if="$ctrl.title">\n\t\t\t\t\t\t{{ $ctrl.title }}\n\t\t\t\t\t</li>\n\t\t\t\t\t<li class="divider" ng-if="$ctrl.title" role="separator"></li>\n\n\t\t\t\t\t<li class="media" ng-if="$ctrl.api == \'wu\'" ng-repeat="day in $ctrl.data.forecast.simpleforecast.forecastday | limitTo: $ctrl.limit">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-wu-{{ day.icon }}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t<span class="text-danger">{{ day.high.celsius }}\xB0C</span>\n\t\t\t\t\t\t\t\t<span class="text-primary">{{ day.low.celsius }}\xB0C</span>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<span>{{ ::$ctrl.getDay($index) }}</span>\n\t\t\t\t\t\t\t<span class="text-muted">{{ day.conditions }}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class="media" ng-if="$ctrl.api == \'owm\'" ng-repeat="day in $ctrl.data">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-owm-{{ day.id }}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\n\t\t\t\t\t<li class="media" ng-if="$ctrl.api == \'dsn\'" ng-repeat="day in $ctrl.data">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-dsn-{{ day.id }}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t'
});
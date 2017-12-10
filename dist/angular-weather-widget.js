'use strict';

/**
* Angular-Weather-Widget
* Compact weather widget that is toggle via. a dropdown.
*
* @param {string} [class] Optional class style to apply
*/

angular.module('uiWeatherWidget', []).component('uiWeatherWidget', {

	bindings: {
		class: '@?',
		data: '<'
	},

	controller: ["$scope", "$attrs", function controller($scope, $attrs) {
		var $ctrl = this;

		$ctrl.$attrs = $attrs || {};
		$ctrl.date = new Date();
	}],

	template: '\n\t\t\t<div class="dropdown">\n\t\t\t\t<button class="dropdown-toggle btn btn-primary" data-toggle="dropdown">\n\t\t\t\t\t<i class="wi wi-day-sunny"></i> {{ $ctrl.data[0].temp }}\xB0C\n\t\t\t\t</button>\n\t\t\t\t<ul class="dropdown-menu">\n\t\t\t\t\t<li class="media" ng-repeat="day in $ctrl.data" ng-if="!$first">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-fw wi-day-sunny"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t<span class="text-danger">{{ day.tempMax }}\xB0C</span>\n\t\t\t\t\t\t\t\t<span class="text-primary">{{ day.tempMin }}\xB0C</span>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t{{ day.date | date: \'EEEE\' }}\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t'
});
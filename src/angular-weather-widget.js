/**
* Angular-Weather-Widget
* Compact weather widget that is toggle via. a dropdown.
*
* @param {string} [class] Optional class style to apply
*/

angular
	.module('uiWeatherWidget', [])
	.component('uiWeatherWidget', {

		bindings: {
			class: '@?',
			data: '<'
		},

		controller: function($scope, $attrs) {
			var $ctrl = this;

			$ctrl.$attrs = $attrs || {};
			$ctrl.date = new Date();
		},

		template: `
			<div class="dropdown">
				<button class="dropdown-toggle btn btn-primary" data-toggle="dropdown">
					<i class="wi wi-day-sunny"></i> {{ $ctrl.data[0].temp }}°C
				</button>
				<ul class="dropdown-menu">
					<li class="media" ng-repeat="day in $ctrl.data" ng-if="!$first">
						<div class="media-left media-middle">
							<i class="wi wi-fw wi-day-sunny"></i>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<span class="text-danger">{{ day.tempMax }}°C</span>
								<span class="text-primary">{{ day.tempMin }}°C</span>
							</h4>
							{{ day.date | date: 'EEEE' }}
						</div>
					</li>
				</ul>
			</div>
		`
	});

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
			api: '@',
			class: '@?',
			data: '<'
		},

		controller: function($scope, $attrs) {
			var $ctrl = this;

			$ctrl.$attrs = $attrs || {};

			$ctrl.getDay = function(offset) {
				var date = new Date();
				return date.setDate(date.getDate() + offset);
			};
		},

		template: `
			<div class="dropdown">
				<button class="dropdown-toggle btn btn-primary" data-toggle="dropdown">
					<i class="wi wi-day-sunny"></i> {{ $ctrl.data[0].temp }}°C
				</button>

				<ul class="dropdown-menu">
					<li class="media" ng-if="$ctrl.api == 'wu'" ng-repeat="day in $ctrl.data.forecast.simpleforecast.forecastday">
						<div class="media-left media-middle">
							<i class="wi wi-fw wi-wu-{{ day.icon }}"></i>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<span class="text-danger">{{ day.high.celsius }}°C</span>
								<span class="text-primary">{{ day.low.celsius }}°C</span>
							</h4>
							{{ ::$ctrl.getDay($index) | date: 'EEEE' }}
						</div>
					</li>

					<li class="media" ng-if="$ctrl.api == 'owm'" ng-repeat="day in $ctrl.data">
						<div class="media-left media-middle">
							<i class="wi wi-fw wi-owm-{{ day.id }}"></i>
						</div>
					</li>

					<li class="media" ng-if="$ctrl.api == 'dsn'" ng-repeat="day in $ctrl.data">
						<div class="media-left media-middle">
							<i class="wi wi-fw wi-dsn-{{ day.id }}"></i>
						</div>
					</li>
				</ul>
			</div>
		`
	});

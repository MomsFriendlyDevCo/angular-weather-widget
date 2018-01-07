/**
* Angular-Weather-Widget
* Compact weather widget that is toggle via. a dropdown.
*
* @param {string} [api] Specify source of data (ie. Weather Underground)
* @param {string} [title] Optional title for component (ie. Brisbane 5 day forecast)
*/

angular
	.module('uiWeatherWidget', [])
	.component('uiWeatherWidget', {

		bindings: {
			api: '@',
			data: '<',
			title: '@?'
		},

		controller: function($scope, $attrs) {
			var $ctrl = this;

			$ctrl.$attrs = $attrs || {};
			$ctrl.limit = $ctrl.limit || 5;

			$ctrl.getDay = function(offset) {
				var date = moment().add(offset, 'd');
				return date.format('dddd');
			};
		},

		template: `
			<div class="dropdown">
				<button class="dropdown-toggle btn btn-primary" data-toggle="dropdown">
					<i class="wi wi-wu-{{ $ctrl.data.forecast.simpleforecast.forecastday[0].icon }}" ng-if="$ctrl.api == 'wu'"></i>
					<i class="wi wi-owm-{{ $ctrl.data }}" ng-if="$ctrl.api == 'owm'"></i>
					<i class="wi wi-dsn-{{ $ctrl.data }}" ng-if="$ctrl.api == 'dsn'"></i>
				</button>

				<ul class="dropdown-menu">
					<li class="dropdown-header" ng-if="$ctrl.title">
						{{ $ctrl.title }}
					</li>
					<li class="divider" ng-if="$ctrl.title" role="separator"></li>

					<li class="media" ng-if="$ctrl.api == 'wu'" ng-repeat="day in $ctrl.data.forecast.simpleforecast.forecastday | limitTo: $ctrl.limit">
						<div class="media-left media-middle">
							<i class="wi wi-wu-{{ day.icon }}"></i>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<span class="text-danger">{{ day.high.celsius }}°C</span>
								<span class="text-primary">{{ day.low.celsius }}°C</span>
							</h4>
							<span>{{ ::$ctrl.getDay($index) }}</span>
							<span class="text-muted">{{ day.conditions }}</span>
						</div>
					</li>

					<li class="media" ng-if="$ctrl.api == 'owm'" ng-repeat="day in $ctrl.data">
						<div class="media-left media-middle">
							<i class="wi wi-owm-{{ day.id }}"></i>
						</div>
					</li>

					<li class="media" ng-if="$ctrl.api == 'dsn'" ng-repeat="day in $ctrl.data">
						<div class="media-left media-middle">
							<i class="wi wi-dsn-{{ day.id }}"></i>
						</div>
					</li>
				</ul>
			</div>
		`
	});

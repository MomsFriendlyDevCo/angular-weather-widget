/**
* Angular-Weather-Widget
* Compact weather widget displayed in a Bootstrap compatible dropdown
*
* @param {string} apiKey Wunderground API key
* @param {string} [location="australia/sydney"] The location reference to display the weather for
* @param {function} [errorHandler] Function to handle errors. Called as ({error}), if unspecified a standard error will throw
* @param {number} [dayLimit=7] How many days of weather to display. The default is a full week
* @param {string} [scale="celcius"] What measurement to use for temperatutes. ENUM: 'celsius', 'fahrenheit'
*/

angular
	.module('uiWeatherWidget', [])
	.component('uiWeatherWidget', {
		bindings: {
			apiKey: '@',
			location: '<?',
			errorHandler: '&?',
			dayLimit: '<?',
			scale: '@?',
		},
		controller: function($http) {
			var $ctrl = this;

			// Data refersher {{{
			$ctrl.forecast;
			$ctrl.refresh = ()=> {
				if (!$ctrl.apiKey || $ctrl.location) return; // Not ready yet

				$http({
					url: `http://api.wunderground.com/api/${$ctrl.apiKey}/forecast10day/q/${$ctrl.location || 'australia/sydney'}.json`,
					cache: true,
				})
					.then(res => {
						$ctrl.forecast = res.data.forecast.simpleforecast.forecastday.map((d, i) => ({
							date: moment.unix(d.date.epoch),
							dateRelative:
								i == 0 ? 'Today'
								: i == 1 ? 'Tomorrow'
								: moment.unix(d.date.epoch).format('dddd'),
							icon: d.icon,
							conditions: d.conditions,
							high: d.high,
							low: d.low,
							url: `https://www.wunderground.com/weather/${$ctrl.location || 'australia/sydney'}`,
						}));
					})
					.then(()=> $ctrl.today = $ctrl.forecast[0])
					.catch(error => {
						if (angular.isFunction($ctrl.errorHandler)) {
							$ctrl.errorHandler({error});
						} else {
							throw new Error('Error fetching weather data: ' + error.toString());
						}
					})
			};
			// }}}

			$ctrl.$onInit = ()=> $ctrl.refresh();
		},
		template: `
			<div class="dropdown">
				<button class="dropdown-toggle btn btn-default" data-toggle="dropdown">
					<div class="media">
						<div class="media-left media-middle">
							<i class="wi wi-wu-{{$ctrl.today.icon}}"></i>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								<span>{{$ctrl.today.dateRelative}}</span>
								<div class="pull-right">
									<span class="text-primary">{{$ctrl.scale == 'fahrenheit' ? $ctrl.today.low.fahrenheit + '°F' : $ctrl.today.low.celsius + '°C'}}</span>
									-
									<span class="text-danger">{{$ctrl.scale == 'fahrenheit' ? $ctrl.today.high.fahrenheit + '°F' : $ctrl.today.high.celsius + '°C'}}</span>
								</div>
							</h4>
							<span class="text-muted">{{$ctrl.today.conditions}}</span>
						</div>
					</div>
				</button>

				<ul class="dropdown-menu">
					<li class="dropdown-header" ng-if="$ctrl.title">
						Weekly forcast
					</li>
					<li class="divider" ng-if="$ctrl.title" role="separator"></li>

					<li ng-repeat="day in $ctrl.forecast | limitTo:($ctrl.dayLimit||7) track by day.date">
						<a href="{{day.url}}" target="_blank" class="media">
							<div class="media-left media-middle">
								<i class="wi wi-wu-{{day.icon}}"></i>
							</div>
							<div class="media-body">
								<h4 class="media-heading">
									<span>{{day.dateRelative}}</span>
									<div class="pull-right">
										<span class="text-primary">{{$ctrl.scale == 'fahrenheit' ? day.low.fahrenheit + '°F' : day.low.celsius + '°C'}}</span>
										-
										<span class="text-danger">{{$ctrl.scale == 'fahrenheit' ? day.high.fahrenheit + '°F' : day.high.celsius + '°C'}}</span>
									</div>
								</h4>
								<span class="text-muted">{{day.conditions}}</span>
							</div>
						</a>
					</li>
				</ul>
			</div>
		`
	});

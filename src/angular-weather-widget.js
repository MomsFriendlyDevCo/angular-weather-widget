/**
* Angular-Weather-Widget
* Compact weather widget displayed in a Bootstrap compatible dropdown
*
* @param {string} [apiKey] Wunderground API key
* @param {string} [location="australia/sydney"] The location reference to display the weather for
* @param {function} [errorHandler] Function to handle errors. Called as ({error}), if unspecified a standard error will throw
* @param {number} [dayLimit=7] How many days of weather to display. The default is a full week
* @param {string} [scale="celcius"] What measurement to use for temperatutes. ENUM: 'celsius', 'fahrenheit'
* @param {string} [url] The URL to use (if unspecified it will be constructed from `apiKey` + `location`)
*/

angular
	.module('uiWeatherWidget', [])
	.provider('uiWeatherWidget', function() {
		var settings = this.settings = {
			apiKey: undefined,
			location: 'australia/sydney',
			errorHandler: undefined,
			dayLimit: 7,
			radar: '',
			scale: 'celcius',
			url: undefined,
		};

		this.$get = function() {
			return {settings};
		};
	})
	.component('uiWeatherWidget', {
		bindings: {
			apiKey: '@?',
			location: '<?',
			errorHandler: '&?',
			dayLimit: '<?',
			scale: '@?',
			radar: '@?',
			url: '@?',
		},
		controller: function($http, uiWeatherWidget) {
			var $ctrl = this;
			$ctrl.uiWeatherWidget = uiWeatherWidget;

			// Data refersher {{{
			$ctrl.loading = true;
			$ctrl.forecast;
			$ctrl.refresh = ()=> {
				// Apply defaults {{{
				Object.keys(uiWeatherWidget.settings).forEach(key => {
					if ($ctrl[key] == undefined) $ctrl[key] = uiWeatherWidget.settings[key];
				});
				// }}}

				if ( ! (// Do we have enough information to continue?
					($ctrl.url || uiWeatherWidget.settings.url)
					|| (
						($ctrl.apiKey || uiWeatherWidget.settings.apiKey)
						&& ($ctrl.location || uiWeatherWidget.settings.location)
					)
				)) return; // Not ready yet

				$ctrl.status = 'loading';
				$http({
					url: $ctrl.url || uiWeatherWidget.settings.url || `http://api.wunderground.com/api/${$ctrl.apiKey || uiWeatherWidget.settings.apiKey}/forecast10day/q/${$ctrl.location || uiWeatherWidget.settings.location || 'australia/sydney'}.json`,
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
					.then(()=> $ctrl.status = 'loaded')
					.catch(error => {
						$ctrl.status = 'error';
						if (angular.isFunction($ctrl.errorHandler)) {
							$ctrl.errorHandler({error});
						} else if (angular.isFunction(uiWeatherWidget.settings.errorHandler)) {
							uiWeatherWidget.settings.errorHandler(error);
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
				<button class="dropdown-toggle btn btn-block btn-default media" data-toggle="dropdown">
					<div ng-if="$ctrl.status == 'loading'">
						<div class="media-left media-middle">
							<i class="fa fa-spinner fa-spin fa-2x"></i>
						</div>
						<div class="media-body">
							<h4 class="media-heading">
								Loading...
							</h4>
						</div>
					</div>
					<div ng-if="$ctrl.status == 'error'">
						<div class="media-left media-middle">
							<i class="fa fa-exclamation-triangle fa-2x"></i>
						</div>
						<div ng-click="$ctrl.refresh()" class="media-body">
							<h4 class="media-heading">
								Error loading weather
							</h4>
							<span class="text-muted">(click to retry)</span>
						</div>
					</div>
					<div ng-if="$ctrl.status == 'loaded'" class="media">
						<div class="media-left media-middle">
							<i class="wi wi-wu-{{$ctrl.today.icon}}"></i>
						</div>
						<div class="media-body text-center">
							<h4 class="media-heading">
								<span class="text-primary">{{$ctrl.scale == 'fahrenheit' ? $ctrl.today.low.fahrenheit + '°F' : $ctrl.today.low.celsius + '°C'}}</span>
								-
								<span class="text-danger">{{$ctrl.scale == 'fahrenheit' ? $ctrl.today.high.fahrenheit + '°F' : $ctrl.today.high.celsius + '°C'}}</span>
							</h4>
							<span class="text-muted">{{$ctrl.today.conditions}}</span>
						</div>
					</div>
				</button>

				<div ng-if="$ctrl.status == 'loaded'" class="dropdown-menu multi-column" ng-class="$ctrl.radar && 'has-radar'">
					<ul ng-if="$ctrl.radar" class="dropdown-menu" class="weather-radar">
						<li>
							<img ng-src="{{$ctrl.radar}}" width="512px" height="512px"/>
						</li>
					</ul>
					<ul class="dropdown-menu weather-menu">
						<li class="dropdown-header" ng-if="$ctrl.title">{{$ctrl.title}}</li>
						<li class="divider" ng-if="$ctrl.title" role="separator"></li>

						<li ng-repeat="day in $ctrl.forecast | limitTo:($ctrl.dayLimit||$ctrl.uiWeatherWidget.settings.dayLimit||7) track by day.date">
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
			</div>
		`
	});

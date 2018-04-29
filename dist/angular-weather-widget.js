'use strict';

/**
* Angular-Weather-Widget
* Compact weather widget displayed in a Bootstrap compatible dropdown
*
* @param {string} [apiKey] Wunderground API key
* @param {array} [attributions] A list of attributions for the source data. Defaults to crediting 'Weather Underground'. Add any others you have (such as the radar) provider as entities. Each entity be an object with a `href` + `title` property
* @param {string} [location="australia/sydney"] The location reference to display the weather for
* @param {function} [errorHandler] Function to handle errors. Called as ({error}), if unspecified a standard error will throw
* @param {number} [dayLimit=7] How many days of weather to display. The default is a full week
* @param {string} [scale="celcius"] What measurement to use for temperatutes. ENUM: 'celsius', 'fahrenheit'
* @param {string} [url] The URL to use (if unspecified it will be constructed from `apiKey` + `location`)
*/

angular.module('uiWeatherWidget', []).provider('uiWeatherWidget', function () {
	var settings = this.settings = {
		apiKey: undefined,
		attributions: [{ href: 'https://www.wunderground.com', title: 'Weather Underground' }],
		location: 'australia/sydney',
		errorHandler: undefined,
		dayLimit: 7,
		radar: '',
		scale: 'celcius',
		url: undefined
	};

	this.$get = function () {
		return { settings: settings };
	};
}).component('uiWeatherWidget', {
	bindings: {
		apiKey: '@?',
		attributions: '<?',
		location: '<?',
		errorHandler: '&?',
		dayLimit: '<?',
		scale: '@?',
		radar: '@?',
		url: '@?'
	},
	controller: ['$http', 'uiWeatherWidget', function controller($http, uiWeatherWidget) {
		var $ctrl = this;
		$ctrl.uiWeatherWidget = uiWeatherWidget;

		// Data refersher {{{
		$ctrl.loading = true;
		$ctrl.forecast;
		$ctrl.refresh = function () {
			// Apply defaults {{{
			Object.keys(uiWeatherWidget.settings).forEach(function (key) {
				if ($ctrl[key] == undefined) $ctrl[key] = uiWeatherWidget.settings[key];
			});
			// }}}

			if (!( // Do we have enough information to continue?
			$ctrl.url || uiWeatherWidget.settings.url || ($ctrl.apiKey || uiWeatherWidget.settings.apiKey) && ($ctrl.location || uiWeatherWidget.settings.location))) return; // Not ready yet

			$ctrl.status = 'loading';
			$http({
				url: $ctrl.url || uiWeatherWidget.settings.url || 'http://api.wunderground.com/api/' + ($ctrl.apiKey || uiWeatherWidget.settings.apiKey) + '/forecast10day/q/' + ($ctrl.location || uiWeatherWidget.settings.location || 'australia/sydney') + '.json',
				cache: true
			}).then(function (res) {
				$ctrl.forecast = res.data.forecast.simpleforecast.forecastday.map(function (d, i) {
					return {
						date: moment.unix(d.date.epoch),
						dateRelative: i == 0 ? 'Today' : i == 1 ? 'Tomorrow' : moment.unix(d.date.epoch).format('dddd'),
						icon: d.icon,
						conditions: d.conditions,
						high: d.high,
						low: d.low,
						url: 'https://www.wunderground.com/weather/' + ($ctrl.location || 'australia/sydney')
					};
				});
			}).then(function () {
				return $ctrl.today = $ctrl.forecast[0];
			}).then(function () {
				return $ctrl.status = 'loaded';
			}).catch(function (error) {
				$ctrl.status = 'error';
				if (angular.isFunction($ctrl.errorHandler)) {
					$ctrl.errorHandler({ error: error });
				} else if (angular.isFunction(uiWeatherWidget.settings.errorHandler)) {
					uiWeatherWidget.settings.errorHandler(error);
				} else {
					throw new Error('Error fetching weather data: ' + error.toString());
				}
			});
		};
		// }}}

		$ctrl.$onInit = function () {
			return $ctrl.refresh();
		};
	}],
	template: '\n\t\t\t<div class="dropdown">\n\t\t\t\t<button class="dropdown-toggle btn btn-block btn-default media" data-toggle="dropdown">\n\t\t\t\t\t<div ng-if="$ctrl.status == \'loading\'">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="fa fa-spinner fa-spin fa-2x"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\tLoading...\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div ng-if="$ctrl.status == \'error\'">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="fa fa-exclamation-triangle fa-2x"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div ng-click="$ctrl.refresh()" class="media-body">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\tError loading weather\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<span class="text-muted">(click to retry)</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div ng-if="$ctrl.status == \'loaded\'" class="media">\n\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t<i class="wi wi-wu-{{$ctrl.today.icon}}"></i>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="media-body text-center">\n\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t<span class="text-primary">{{$ctrl.scale == \'fahrenheit\' ? $ctrl.today.low.fahrenheit + \'\xB0F\' : $ctrl.today.low.celsius + \'\xB0C\'}}</span>\n\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t<span class="text-danger">{{$ctrl.scale == \'fahrenheit\' ? $ctrl.today.high.fahrenheit + \'\xB0F\' : $ctrl.today.high.celsius + \'\xB0C\'}}</span>\n\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t<span class="text-muted">{{$ctrl.today.conditions}}</span>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</button>\n\n\t\t\t\t<div ng-if="$ctrl.status == \'loaded\'" class="dropdown-menu multi-column" ng-class="$ctrl.radar && \'has-radar\'">\n\t\t\t\t\t<ul ng-if="$ctrl.radar" class="dropdown-menu" class="weather-radar">\n\t\t\t\t\t\t<li>\n\t\t\t\t\t\t\t<img ng-src="{{$ctrl.radar}}" width="512px" height="512px"/>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t</ul>\n\t\t\t\t\t<ul class="dropdown-menu weather-menu">\n\t\t\t\t\t\t<li class="dropdown-header" ng-if="$ctrl.title">{{$ctrl.title}}</li>\n\t\t\t\t\t\t<li class="divider" ng-if="$ctrl.title" role="separator"></li>\n\n\t\t\t\t\t\t<li ng-repeat="day in $ctrl.forecast | limitTo:($ctrl.dayLimit||$ctrl.uiWeatherWidget.settings.dayLimit||7) track by day.date">\n\t\t\t\t\t\t\t<a href="{{day.url}}" target="_blank" class="media">\n\t\t\t\t\t\t\t\t<div class="media-left media-middle">\n\t\t\t\t\t\t\t\t\t<i class="wi wi-wu-{{day.icon}}"></i>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class="media-body">\n\t\t\t\t\t\t\t\t\t<h4 class="media-heading">\n\t\t\t\t\t\t\t\t\t\t<span>{{day.dateRelative}}</span>\n\t\t\t\t\t\t\t\t\t\t<div class="pull-right">\n\t\t\t\t\t\t\t\t\t\t\t<span class="text-primary">{{$ctrl.scale == \'fahrenheit\' ? day.low.fahrenheit + \'\xB0F\' : day.low.celsius + \'\xB0C\'}}</span>\n\t\t\t\t\t\t\t\t\t\t\t-\n\t\t\t\t\t\t\t\t\t\t\t<span class="text-danger">{{$ctrl.scale == \'fahrenheit\' ? day.high.fahrenheit + \'\xB0F\' : day.high.celsius + \'\xB0C\'}}</span>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</h4>\n\t\t\t\t\t\t\t\t\t<span class="text-muted">{{day.conditions}}</span>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t</li>\n\t\t\t\t\t\t<div ng-if="$ctrl.attributions && $ctrl.attributions.length" class="weather-attributions-wrapper">\n\t\t\t\t\t\t\t<div class="weather-attributions">\n\t\t\t\t\t\t\t\tdata provided by\n\t\t\t\t\t\t\t\t<span ng-repeat="attribution in $ctrl.attributions">\n\t\t\t\t\t\t\t\t\t<a href="{{attribution.href}}" target="_blank">\n\t\t\t\t\t\t\t\t\t\t{{attribution.title}}\n\t\t\t\t\t\t\t\t\t</a>\n\t\t\t\t\t\t\t\t\t<span ng-if="!$last">,</span>\n\t\t\t\t\t\t\t\t</span>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</ul>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t'
});
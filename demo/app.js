var app = angular.module('app', [
	'uiWeatherWidget',
]);

app.controller("demoCtrl", function($scope) {
	$scope.data = {
	    "response":{
	        "version":"0.1",
	        "termsofService":"http://www.wunderground.com/weather/api/d/terms.html",
	        "features":{
	            "forecast10day":1
	        }
	    },
	    "forecast":{
	        "txt_forecast":{
	            "date":"12:19 PM AEST",
	            "forecastday":[
	                {
	                    "period":0,
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "title":"Saturday",
	                    "fcttext":"Sunny. High 86F. Winds NE at 10 to 15 mph.",
	                    "fcttext_metric":"Plentiful sunshine. High near 30C. Winds NE at 15 to 25 km/h.",
	                    "pop":"0"
	                },
	                {
	                    "period":1,
	                    "icon":"nt_clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
	                    "title":"Saturday Night",
	                    "fcttext":"Clear skies. Low near 65F. Winds WSW at 5 to 10 mph.",
	                    "fcttext_metric":"Clear skies. Low 19C. Winds W at 10 to 15 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":2,
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "title":"Sunday",
	                    "fcttext":"Sunny. High 87F. Winds NNE at 10 to 15 mph.",
	                    "fcttext_metric":"A mainly sunny sky. High around 30C. Winds NE at 15 to 25 km/h.",
	                    "pop":"0"
	                },
	                {
	                    "period":3,
	                    "icon":"nt_clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
	                    "title":"Sunday Night",
	                    "fcttext":"Mainly clear skies. Low 68F. Winds NW at 5 to 10 mph.",
	                    "fcttext_metric":"Clear skies with a few passing clouds. Low near 20C. Winds NW at 10 to 15 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":4,
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "title":"Monday",
	                    "fcttext":"Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 86F. Winds NNE at 10 to 15 mph.",
	                    "fcttext_metric":"Partly cloudy skies. High around 30C. Winds NNE at 15 to 25 km/h.",
	                    "pop":"0"
	                },
	                {
	                    "period":5,
	                    "icon":"nt_clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
	                    "title":"Monday Night",
	                    "fcttext":"Clear to partly cloudy. Low 69F. Winds NNW at 10 to 15 mph.",
	                    "fcttext_metric":"A few clouds overnight. Low around 20C. Winds NNW at 15 to 25 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":6,
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "title":"Tuesday",
	                    "fcttext":"Some clouds in the morning will give way to mainly sunny skies for the afternoon. High 86F. Winds N at 10 to 20 mph.",
	                    "fcttext_metric":"Partly cloudy skies. High near 30C. Winds NNE at 15 to 30 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":7,
	                    "icon":"nt_clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
	                    "title":"Tuesday Night",
	                    "fcttext":"Mostly clear. Low 69F. Winds NNW at 10 to 15 mph.",
	                    "fcttext_metric":"A mostly clear sky. Low 21C. Winds NNW at 15 to 25 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":8,
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "title":"Wednesday",
	                    "fcttext":"Mainly sunny. High 87F. Winds NNE at 10 to 20 mph.",
	                    "fcttext_metric":"Sunny skies. High near 30C. Winds NNE at 15 to 25 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":9,
	                    "icon":"nt_partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
	                    "title":"Wednesday Night",
	                    "fcttext":"A few clouds from time to time. Low 71F. Winds E at 5 to 10 mph.",
	                    "fcttext_metric":"A few clouds. Low 22C. Winds E at 10 to 15 km/h.",
	                    "pop":"20"
	                },
	                {
	                    "period":10,
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "title":"Thursday",
	                    "fcttext":"Cloudy skies early, followed by partial clearing. High 84F. Winds E at 10 to 15 mph.",
	                    "fcttext_metric":"Mostly cloudy skies early will become partly cloudy later in the day. High 29C. Winds E at 15 to 25 km/h.",
	                    "pop":"20"
	                },
	                {
	                    "period":11,
	                    "icon":"nt_partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_partlycloudy.gif",
	                    "title":"Thursday Night",
	                    "fcttext":"A few clouds. Low around 70F. Winds SE at 5 to 10 mph.",
	                    "fcttext_metric":"A few clouds. Low 21C. Winds SE at 10 to 15 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":12,
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "title":"Friday",
	                    "fcttext":"Sunshine along with some cloudy intervals. High 86F. Winds E at 10 to 15 mph.",
	                    "fcttext_metric":"Sunshine along with some cloudy intervals. High around 30C. Winds E at 15 to 25 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":13,
	                    "icon":"nt_clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_clear.gif",
	                    "title":"Friday Night",
	                    "fcttext":"Generally fair. Low 69F. Winds N at 5 to 10 mph.",
	                    "fcttext_metric":"Mostly clear skies. Low 21C. Winds N at 10 to 15 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":14,
	                    "icon":"chancetstorms",
	                    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
	                    "title":"Saturday",
	                    "fcttext":"Partly cloudy with afternoon showers or thunderstorms. High 88F. Winds N at 10 to 15 mph. Chance of rain 40%.",
	                    "fcttext_metric":"Partly cloudy with afternoon showers or thunderstorms. High 31C. Winds N at 15 to 25 km/h. Chance of rain 40%.",
	                    "pop":"40"
	                },
	                {
	                    "period":15,
	                    "icon":"nt_chancetstorms",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
	                    "title":"Saturday Night",
	                    "fcttext":"Partly to mostly cloudy with a chance of thunderstorms. Low 71F. Winds NW at 5 to 10 mph. Chance of rain 40%.",
	                    "fcttext_metric":"Variable clouds with thunderstorms, especially overnight. Low 22C. Winds NW at 10 to 15 km/h. Chance of rain 50%.",
	                    "pop":"40"
	                },
	                {
	                    "period":16,
	                    "icon":"chancerain",
	                    "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
	                    "title":"Sunday",
	                    "fcttext":"Cloudy with a few showers. High 83F. Winds ESE at 10 to 20 mph. Chance of rain 30%.",
	                    "fcttext_metric":"Cloudy with a few showers. High 28C. Winds ESE at 15 to 30 km/h. Chance of rain 30%.",
	                    "pop":"30"
	                },
	                {
	                    "period":17,
	                    "icon":"nt_mostlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_mostlycloudy.gif",
	                    "title":"Sunday Night",
	                    "fcttext":"Mostly cloudy. Low 69F. Winds S at 10 to 15 mph.",
	                    "fcttext_metric":"Mostly cloudy skies. Low 21C. Winds S at 15 to 25 km/h.",
	                    "pop":"20"
	                },
	                {
	                    "period":18,
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "title":"Monday",
	                    "fcttext":"Partly to mostly cloudy. High 84F. Winds ESE at 10 to 15 mph.",
	                    "fcttext_metric":"Mostly cloudy skies early, then partly cloudy in the afternoon. High 29C. Winds ESE at 15 to 25 km/h.",
	                    "pop":"10"
	                },
	                {
	                    "period":19,
	                    "icon":"nt_chancetstorms",
	                    "icon_url":"http://icons.wxug.com/i/c/k/nt_chancetstorms.gif",
	                    "title":"Monday Night",
	                    "fcttext":"Scattered thunderstorms in the evening, then variable clouds overnight with more showers at times. Low near 70F. ENE winds shifting to W at 10 to 15 mph. Chance of rain 40%.",
	                    "fcttext_metric":"Variable clouds with scattered thunderstorms. Low 21C. ENE winds shifting to WNW at 15 to 25 km/h. Chance of rain 40%.",
	                    "pop":"40"
	                }
	            ]
	        },
	        "simpleforecast":{
	            "forecastday":[
	                {
	                    "date":{
	                        "epoch":"1515229200",
	                        "pretty":"7:00 PM AEST on January 06, 2018",
	                        "day":6,
	                        "month":1,
	                        "year":2018,
	                        "yday":5,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Sat",
	                        "weekday":"Saturday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":1,
	                    "high":{
	                        "fahrenheit":"86",
	                        "celsius":"30"
	                    },
	                    "low":{
	                        "fahrenheit":"65",
	                        "celsius":"18"
	                    },
	                    "conditions":"Clear",
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "skyicon":"",
	                    "pop":0,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"NE",
	                        "degrees":56
	                    },
	                    "avewind":{
	                        "mph":10,
	                        "kph":16,
	                        "dir":"NE",
	                        "degrees":56
	                    },
	                    "avehumidity":53,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515315600",
	                        "pretty":"7:00 PM AEST on January 07, 2018",
	                        "day":7,
	                        "month":1,
	                        "year":2018,
	                        "yday":6,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Sun",
	                        "weekday":"Sunday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":2,
	                    "high":{
	                        "fahrenheit":"87",
	                        "celsius":"31"
	                    },
	                    "low":{
	                        "fahrenheit":"68",
	                        "celsius":"20"
	                    },
	                    "conditions":"Clear",
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "skyicon":"",
	                    "pop":0,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"NNE",
	                        "degrees":32
	                    },
	                    "avewind":{
	                        "mph":11,
	                        "kph":18,
	                        "dir":"NNE",
	                        "degrees":32
	                    },
	                    "avehumidity":56,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515402000",
	                        "pretty":"7:00 PM AEST on January 08, 2018",
	                        "day":8,
	                        "month":1,
	                        "year":2018,
	                        "yday":7,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Mon",
	                        "weekday":"Monday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":3,
	                    "high":{
	                        "fahrenheit":"86",
	                        "celsius":"30"
	                    },
	                    "low":{
	                        "fahrenheit":"69",
	                        "celsius":"21"
	                    },
	                    "conditions":"Partly Cloudy",
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "skyicon":"",
	                    "pop":0,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"NNE",
	                        "degrees":14
	                    },
	                    "avewind":{
	                        "mph":12,
	                        "kph":19,
	                        "dir":"NNE",
	                        "degrees":14
	                    },
	                    "avehumidity":56,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515488400",
	                        "pretty":"7:00 PM AEST on January 09, 2018",
	                        "day":9,
	                        "month":1,
	                        "year":2018,
	                        "yday":8,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Tue",
	                        "weekday":"Tuesday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":4,
	                    "high":{
	                        "fahrenheit":"86",
	                        "celsius":"30"
	                    },
	                    "low":{
	                        "fahrenheit":"69",
	                        "celsius":"21"
	                    },
	                    "conditions":"Partly Cloudy",
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "skyicon":"",
	                    "pop":10,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":20,
	                        "kph":32,
	                        "dir":"N",
	                        "degrees":11
	                    },
	                    "avewind":{
	                        "mph":13,
	                        "kph":21,
	                        "dir":"N",
	                        "degrees":11
	                    },
	                    "avehumidity":60,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515574800",
	                        "pretty":"7:00 PM AEST on January 10, 2018",
	                        "day":10,
	                        "month":1,
	                        "year":2018,
	                        "yday":9,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Wed",
	                        "weekday":"Wednesday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":5,
	                    "high":{
	                        "fahrenheit":"87",
	                        "celsius":"31"
	                    },
	                    "low":{
	                        "fahrenheit":"71",
	                        "celsius":"22"
	                    },
	                    "conditions":"Clear",
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "skyicon":"",
	                    "pop":10,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":20,
	                        "kph":32,
	                        "dir":"NNE",
	                        "degrees":19
	                    },
	                    "avewind":{
	                        "mph":13,
	                        "kph":21,
	                        "dir":"NNE",
	                        "degrees":19
	                    },
	                    "avehumidity":59,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515661200",
	                        "pretty":"7:00 PM AEST on January 11, 2018",
	                        "day":11,
	                        "month":1,
	                        "year":2018,
	                        "yday":10,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Thu",
	                        "weekday":"Thursday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":6,
	                    "high":{
	                        "fahrenheit":"84",
	                        "celsius":"29"
	                    },
	                    "low":{
	                        "fahrenheit":"70",
	                        "celsius":"21"
	                    },
	                    "conditions":"Partly Cloudy",
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "skyicon":"",
	                    "pop":20,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"E",
	                        "degrees":85
	                    },
	                    "avewind":{
	                        "mph":12,
	                        "kph":19,
	                        "dir":"E",
	                        "degrees":85
	                    },
	                    "avehumidity":62,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515747600",
	                        "pretty":"7:00 PM AEST on January 12, 2018",
	                        "day":12,
	                        "month":1,
	                        "year":2018,
	                        "yday":11,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Fri",
	                        "weekday":"Friday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":7,
	                    "high":{
	                        "fahrenheit":"86",
	                        "celsius":"30"
	                    },
	                    "low":{
	                        "fahrenheit":"69",
	                        "celsius":"21"
	                    },
	                    "conditions":"Clear",
	                    "icon":"clear",
	                    "icon_url":"http://icons.wxug.com/i/c/k/clear.gif",
	                    "skyicon":"",
	                    "pop":10,
	                    "qpf_allday":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"E",
	                        "degrees":82
	                    },
	                    "avewind":{
	                        "mph":12,
	                        "kph":19,
	                        "dir":"E",
	                        "degrees":82
	                    },
	                    "avehumidity":58,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515834000",
	                        "pretty":"7:00 PM AEST on January 13, 2018",
	                        "day":13,
	                        "month":1,
	                        "year":2018,
	                        "yday":12,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Sat",
	                        "weekday":"Saturday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":8,
	                    "high":{
	                        "fahrenheit":"88",
	                        "celsius":"31"
	                    },
	                    "low":{
	                        "fahrenheit":"71",
	                        "celsius":"22"
	                    },
	                    "conditions":"Chance of a Thunderstorm",
	                    "icon":"chancetstorms",
	                    "icon_url":"http://icons.wxug.com/i/c/k/chancetstorms.gif",
	                    "skyicon":"",
	                    "pop":40,
	                    "qpf_allday":{
	                        "in":0.14,
	                        "mm":4
	                    },
	                    "qpf_day":{
	                        "in":0.05,
	                        "mm":1
	                    },
	                    "qpf_night":{
	                        "in":0.09,
	                        "mm":2
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"N",
	                        "degrees":7
	                    },
	                    "avewind":{
	                        "mph":11,
	                        "kph":18,
	                        "dir":"N",
	                        "degrees":7
	                    },
	                    "avehumidity":59,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1515920400",
	                        "pretty":"7:00 PM AEST on January 14, 2018",
	                        "day":14,
	                        "month":1,
	                        "year":2018,
	                        "yday":13,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Sun",
	                        "weekday":"Sunday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":9,
	                    "high":{
	                        "fahrenheit":"83",
	                        "celsius":"28"
	                    },
	                    "low":{
	                        "fahrenheit":"69",
	                        "celsius":"21"
	                    },
	                    "conditions":"Chance of Rain",
	                    "icon":"chancerain",
	                    "icon_url":"http://icons.wxug.com/i/c/k/chancerain.gif",
	                    "skyicon":"",
	                    "pop":30,
	                    "qpf_allday":{
	                        "in":0.05,
	                        "mm":1
	                    },
	                    "qpf_day":{
	                        "in":0.05,
	                        "mm":1
	                    },
	                    "qpf_night":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":20,
	                        "kph":32,
	                        "dir":"ESE",
	                        "degrees":121
	                    },
	                    "avewind":{
	                        "mph":13,
	                        "kph":21,
	                        "dir":"ESE",
	                        "degrees":121
	                    },
	                    "avehumidity":64,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                },
	                {
	                    "date":{
	                        "epoch":"1516006800",
	                        "pretty":"7:00 PM AEST on January 15, 2018",
	                        "day":15,
	                        "month":1,
	                        "year":2018,
	                        "yday":14,
	                        "hour":19,
	                        "min":"00",
	                        "sec":0,
	                        "isdst":"0",
	                        "monthname":"January",
	                        "monthname_short":"Jan",
	                        "weekday_short":"Mon",
	                        "weekday":"Monday",
	                        "ampm":"PM",
	                        "tz_short":"AEST",
	                        "tz_long":"Australia/Brisbane"
	                    },
	                    "period":10,
	                    "high":{
	                        "fahrenheit":"84",
	                        "celsius":"29"
	                    },
	                    "low":{
	                        "fahrenheit":"70",
	                        "celsius":"21"
	                    },
	                    "conditions":"Partly Cloudy",
	                    "icon":"partlycloudy",
	                    "icon_url":"http://icons.wxug.com/i/c/k/partlycloudy.gif",
	                    "skyicon":"",
	                    "pop":10,
	                    "qpf_allday":{
	                        "in":0.09,
	                        "mm":2
	                    },
	                    "qpf_day":{
	                        "in":0.00,
	                        "mm":0
	                    },
	                    "qpf_night":{
	                        "in":0.09,
	                        "mm":2
	                    },
	                    "snow_allday":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_day":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "snow_night":{
	                        "in":0.0,
	                        "cm":0.0
	                    },
	                    "maxwind":{
	                        "mph":15,
	                        "kph":24,
	                        "dir":"ESE",
	                        "degrees":113
	                    },
	                    "avewind":{
	                        "mph":12,
	                        "kph":19,
	                        "dir":"ESE",
	                        "degrees":113
	                    },
	                    "avehumidity":60,
	                    "maxhumidity":0,
	                    "minhumidity":0
	                }
	            ]
	        }
	    }
	};
 });
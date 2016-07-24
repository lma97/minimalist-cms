'use strict';

/**
 * @ngdoc overview
 * @name minimalistCmsApp
 * @description
 * # minimalistCmsApp
 *
 * Main module of the application.
 */

var app = angular.module('minimalistCmsApp', ['ngRoute']);
app.config(function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
		})
		.when('/admin', {
			templateUrl: 'views/main.html',
			controller: 'MainCtrl',
		})
		.otherwise({
			redirectTo: '/'
		});
});








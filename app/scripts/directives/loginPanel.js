'use strict';

/**
 * Created by lmaddock on 23/07/2016.
 * @ngdoc function
 * @name minimalistCmsApp.directive:formSnippet
 * @description
 * # formSnippet
 * Displays the login panel in the header
 */

angular.module('minimalistCmsApp')
	.directive('loginPanel', function() {
		return {
			restrict: 'E',
			scope: false,
			templateUrl: 'views/directives/login-panel.html',
			link: function() {

			}
		};
	});

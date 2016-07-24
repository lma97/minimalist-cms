'use strict';


/**
 * Created by lmaddock on 23/07/2016.
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

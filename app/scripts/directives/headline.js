'use strict';

/**
 * Created by lmaddock on 23/07/2016.
 */

angular.module('minimalistCmsApp')
	.directive('headline', function() {
		return {
			restrict: 'E',
			scope: {
				isAdmin: '=',
				adminUser: '='
			},
			templateUrl: 'views/directives/headline.html',
			link: function() {

			}
		};
	});

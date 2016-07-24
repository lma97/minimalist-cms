'use strict';


/**
 * Created by lmaddock on 23/07/2016.
 */

angular.module('minimalistCmsApp')
	.directive('formSnippet', function() {
		return {
			restrict: 'E',
			scope: false,
			templateUrl: 'views/directives/form-snippet.html',
			link: function() {

			}
		};
	});

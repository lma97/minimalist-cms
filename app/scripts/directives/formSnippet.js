'use strict';

/**
 * Created by lmaddock on 23/07/2016.
 * @ngdoc function
 * @name minimalistCmsApp.directive:formSnippet
 * @description
 * # formSnippet
 * * Displays the add form in admin
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

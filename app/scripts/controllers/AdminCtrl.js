'use strict';

/**
 * @ngdoc function
 * @name minimalistCmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minimalistCmsApp
 */
angular.module('minimalistCmsApp')
  .controller('AdminCtrl', ['$scope', '$location', function ($scope, $location) {
      $scope.showAdminBtn = $location.path() !== '/admin';
  }]);

'use strict';

/**
 * @ngdoc function
 * @name minimalistCmsApp.controller:AdminCtrl
 * @description
 * # AdminCtrl
 * Admin controller of the minimalistCmsApp
 */

angular.module('minimalistCmsApp')
  .controller('AdminCtrl', ['$scope', '$location', function ($scope, $location) {
      $scope.showAdminBtn = $location.path() !== '/admin';
  }]);

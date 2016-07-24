'use strict';

/**
 * @ngdoc function
 * @name minimalistCmsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the minimalistCmsApp
 */
angular.module('minimalistCmsApp')
  .controller('MainCtrl', ['$scope', '$location', function ($scope, $location) {

      //data store
      $scope.storedItems = localStorage.getItem('cms');
      $scope.cms = (localStorage.getItem('cms') !== null ) ? JSON.parse($scope.storedItems) : [];
      $scope.cms.selected = {};
      localStorage.setItem('cms', JSON.stringify($scope.cms));

      //state flags
      $scope.adminMode = $location.path() !== '/admin' ? false : true;

      $scope.editMode = false;
      $scope.showLoginPanel = false;

      //admin user
      $scope.adminUser = 'Guest';
      $scope.adminPassword = 'Guest';

      $scope.toggleLoginPanel = function() {
          $scope.showLoginPanel = $scope.showLoginPanel === false ? true: false;
      };

      $scope.loginUser = function() {
          $location.path('/admin');
          $scope.adminMode = true;
          $scope.showLoginPanel = false;
      };

      $scope.logoutUser = function() {
          $location.path('/');
          $scope.adminMode = false;
      };

      $scope.saveItem = function(index, item) {
          if ((typeof $scope.cms.selected !== 'undefined') && index) {
              $scope.cms.selected = {
                  label: item.label,
                  val: item.val
              };
              $scope.cms[index] = angular.copy($scope.cms.selected);
          } else {
              $scope.cms.push({
                  label: $scope.itemLabel,
                  val: $scope.itemValue
              });
          }

          //clear inputs and close
          $scope.closeAndReset();

          localStorage.setItem('cms', JSON.stringify($scope.cms));
      };


      $scope.showEditForm = function (item, index) {
          $scope.editMode = true;
          $scope.cms.selected = angular.copy(item);
          $scope.cms.selected.id = index;
      };

      $scope.removeItem = function(index) {
          $scope.cms.splice(index, 1);
          localStorage.setItem('cms', JSON.stringify($scope.cms));

          $scope.closeAndReset();
      };

      $scope.removeAll = function() {
          $scope.cms = [];
          localStorage.setItem('cms', JSON.stringify($scope.cms));
      };

      $scope.closeAndReset = function() {
          $scope.itemLabel = '';
          $scope.itemValue = '';
          $scope.cms.selected = {};
          $scope.editMode = false;
      };
  }]);

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
      //temp object for inline editing
      $scope.cms.selected = {};
      localStorage.setItem('cms', JSON.stringify($scope.cms));

      //state flags
      $scope.adminMode = $location.path() !== '/admin' ? false : true;

      $scope.editMode = false;
      $scope.showLoginPanel = false;

      //admin user
      $scope.adminUser = 'Guest';
      $scope.adminPassword = 'Guest';

      //toggle the login field display
      $scope.toggleLoginPanel = function() {
          $scope.showLoginPanel = $scope.showLoginPanel === false ? true: false;
      };

      //login admin user
      $scope.loginUser = function() {
          //redirect to admn view
          $location.path('/admin');
          $scope.adminMode = true;
          $scope.showLoginPanel = false;
      };

      //logout admin user
      $scope.logoutUser = function() {
          $location.path('/');
          $scope.adminMode = false;
      };

      $scope.formValidation = {
          excludeSpecialChars: /^[\w -]*$/
          //email: /^[a-z]+[a-z0-9._]+@[a-z]+\.[a-z.]{2,5}$/
      };

      //save an item to the cms
      $scope.saveItem = function(index, item) {
          if ((typeof $scope.cms.selected !== 'undefined') && index) {
              //edit item
              $scope.cms.selected = {
                  label: item.label,
                  val: item.val
              };
              $scope.cms[index] = angular.copy($scope.cms.selected);

          } else {
              //add new item
              $scope.cms.push({
                  label: $scope.itemLabel,
                  val: $scope.itemValue
              });
          }

          //clear inputs and close
          $scope.closeAndReset();

          localStorage.setItem('cms', JSON.stringify($scope.cms));
      };

      //display inline edit form
      $scope.showEditForm = function (item, index) {
          $scope.editMode = true;
          $scope.cms.selected = angular.copy(item);
          $scope.cms.selected.id = index;
      };

      //remove one item from cms
      $scope.removeItem = function(index) {
          $scope.cms.splice(index, 1);
          localStorage.setItem('cms', JSON.stringify($scope.cms));

          $scope.closeAndReset();
      };

      //remove all items from cms
      $scope.removeAll = function() {
          $scope.cms = [];
          localStorage.setItem('cms', JSON.stringify($scope.cms));
      };

      //reset form
      $scope.closeAndReset = function() {

          //clear form fields and reset
          $scope.itemLabel = '';
          $scope.itemValue = '';
          $scope.cms.selected = {};
          $scope.editMode = false;

          //reset form state
          $scope.addItemForm.$setUntouched();
      };
  }]);

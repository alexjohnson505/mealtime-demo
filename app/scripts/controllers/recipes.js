'use strict';

/**
 * @ngdoc function
 * @name mealtimeApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the mealtimeApp
 */

angular.module('mealtimeApp')
  .controller('RecipesCtrl', function ($scope, api) {

    api.recipes(function(resp){
        $scope.recipes = resp;
    }, function(){
        
    });
     
  });

'use strict';

/**
 * @ngdoc function
 * @name mealtimeApp.controller:RecipesCtrl
 * @description
 * # RecipesCtrl
 * Controller of the mealtimeApp
 */
angular.module('mealtimeApp')
  .controller('RecipesCtrl', function ($scope, $routeParams) {
    
    $scope.slug = $routeParams.slug;

    $scope.step = $routeParams.step;

    $scope.recipeList = [{
    	slug: "001",
    	name: "001",

    },{
    	slug: "002",
    	name: "002",

    },{
    	slug: "003",
    	name: "003",

    },{
    	slug: "004",
    	name: "004",

    },{
    	slug: "005",
    	name: "005",

    },{
    	slug: "006",
    	name: "006",

    },{
    	slug: "007",
    	name: "007",

    },{
    	slug: "008",
    	name: "008",

    }];
  });

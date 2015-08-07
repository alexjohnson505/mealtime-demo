'use strict';

/**
 * @ngdoc overview
 * @name mealtimeApp
 * @description
 * # mealtimeApp
 *
 * Main module of the application.
 */
angular
  .module('mealtimeApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/recipes', {
        templateUrl: 'views/recipes.html',
        controller: 'RecipesCtrl',
        controllerAs: 'recipes'
      })
      .when('/recipe/:slug/:step', {
        templateUrl: 'views/recipe.html',
        controller: 'RecipeCtrl',
        controllerAs: 'recipe'
      })
      // 404
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function($rootScope){

    console.log("App Initialized & Running...");

    $rootScope.user = null;

    });
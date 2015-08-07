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
  .config(function ($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    .state('home', {
      url: "/",
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
    })
    .state('recipes', {
      url: "/recipes",
      templateUrl: "views/recipes.html",
      controller: 'RecipesCtrl',
    })
    .state('recipe', {
      url: "/recipe/:slug",
      templateUrl: "views/recipe.html",
      controller: 'RecipeCtrl',
    });
    
  });
    
    // .run(function($rootScope){

    //   console.log("App Initialized & Running...");
    //   $rootScope.user = null;

    // })
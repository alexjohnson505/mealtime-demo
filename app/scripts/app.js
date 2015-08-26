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
    'timer',
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
      url: "/recipe/:id",
      templateUrl: "views/recipe.html",
      controller: 'RecipeCtrl',
    });

    // 404 Route
    $urlRouterProvider.otherwise('/');
  })

  .run(function($rootScope, api){
    
    // Tell console Angular is working
    console.log("App Initialized & Running...");

    // Disabe app loading message
    $rootScope.appActive = true;

  });

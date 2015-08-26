'use strict';

/**
 * @ngdoc function
 * @name mealtimeApp.controller:RecipeCtrl
 * @description
 * # RecipeCtrl
 * Controller of the mealtimeApp
 */
angular.module('mealtimeApp')
  .controller('RecipeCtrl', function ($scope, api, $state, $stateParams, $sanitize) {
    
    var id = $stateParams.id;

    api.recipe(id, function(resp){
      $scope.recipe = resp;
    });

    // api.steps(id, function(resp){
    //   $scope.steps = resp;
    // });

    // $scope.instructions = [{
    // 	title: "aaa",
		  // desc: "aaa",
		  // img: "aaa",
		  // time: "aaa",
    // }, {
    // 	title: "bbb",
		  // desc: 'bbb',
		  // img: "bbb",
		  // time: "bbb",
    //   timer: 2,
    // }, {
    //   title: "ccc",
    //   desc: "ccc",
    //   img: "ccc",
    //   time: "ccc",
    // },{
    //   title: "ddd",
    //   desc: "ddd",
    //   img: "ddd",
    //   time: "ddd",
    // }];

    
    $scope.currentStep = -1;

    $scope.setStep = function(step){
      $scope.currentStep = step;
    }

    $scope.next = function(){
      $scope.currentStep = $scope.currentStep + 1;

      if ($scope.currentStep >= $scope.instructions.length){
        $scope.currentStep = -1;
      }
    }

    $scope.previous = function(){
      $scope.currentStep = $scope.currentStep - 1;
        
    }

    $scope.timerComplete = function(){
      alert("Beeeep Beeeep Beeeeep!!!")
    }
  });
  
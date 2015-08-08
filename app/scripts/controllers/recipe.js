'use strict';

/**
 * @ngdoc function
 * @name mealtimeApp.controller:RecipeCtrl
 * @description
 * # RecipeCtrl
 * Controller of the mealtimeApp
 */
angular.module('mealtimeApp')
  .controller('RecipeCtrl', function ($scope, $state, $stateParams, $sanitize) {
    
    $scope.instructions = [{
    	title: "aaa",
		  desc: "aaa",
		  img: "aaa",
		  time: "aaa",
    }, {
    	title: "bbb",
		  desc: 'bbb',
		  img: "bbb",
		  time: "bbb",
      timer: 2,
    }, {
      title: "ccc",
      desc: "ccc",
      img: "ccc",
      time: "ccc",
    },{
      title: "ddd",
      desc: "ddd",
      img: "ddd",
      time: "ddd",
    }];


    $scope.slug = $stateParams.slug;

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
  
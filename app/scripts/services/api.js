'use strict';

/**
 * @ngdoc service
 * @name mealtimeApp.api
 * @description
 * # api
 * Service in the mealtimeApp.
 */
angular.module('mealtimeApp')
    .service('api', function($http, $q) {

        var API_URL = "";

        return {

            // Get list of recipes
            recipes: function(success, error) {
            	var promise = $http.get(API_URL + "/recipes/")
                
                promise.success(function(resp){
                	success(resp);
                });

                promise.error(function(resp){
                	success(resp);
                });
            },

            // Get list of recipes
            recipes: function(id, success, error) {
            	var promise = $http.get(API_URL + "/recipes/" + id);
                
                promise.success(function(resp){
                	success(resp);
                });

                promise.error(function(resp){
                	success(resp);
                });
            },
        }
    });

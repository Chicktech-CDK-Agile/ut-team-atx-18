/**
 * Created by hensleym on 1/13/16.
 */
angular.module('myApp.controllers')
    .controller('PartsAndServiceCtrl', function($scope, navService){
        navService.setActiveTab("partsandservice");
    });
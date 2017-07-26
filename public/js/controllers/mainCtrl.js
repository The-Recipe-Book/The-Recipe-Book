angular.module("recipeBook").controller("mainCtrl", function($scope, mainService){

$scope.controller = "Recipe Book Controller is working";

$scope.service = mainService.test;



//end of controller
});

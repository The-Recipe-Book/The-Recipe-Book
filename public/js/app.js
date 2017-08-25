angular.module("recipeBook", ["ui.router"]).config(function($stateProvider, $urlRouterProvider){


  $stateProvider

  .state("home", {
    url: "/",
    templateUrl: "./views/homeTmpl.html",
    controller: "mainCtrl"
  })

  .state("addrecipe", {
    url: "/addrecipe",
    templateUrl: "./views/addRecipeTmpl.html",
    controller: "mainCtrl"
  })



  $urlRouterProvider

  .otherwise("/");


// end of app
});

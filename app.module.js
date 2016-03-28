angular
  .module('speedyCart',['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider
      .when('/',{
        templateUrl: "templates/index.html",
        controller: "HomeController"
      })
      .when('/details/:productID',{
        templateUrl: "templates/details.html",
        controller: "HomeController"
      })
      .when('/shoppingCart/',{
        templateUrl: "templates/shoppingCart.html",
        controller: "CheckOutController"
      })
    })

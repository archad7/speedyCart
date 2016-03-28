angular
  .module('speedyCart')
  .controller('HomeController', function($scope,$location,appService,$routeParams,cartService) {

    appService.getActiveListings()
      .then(function(data) {
        console.log(data);
        $scope.listings = data.data.results;
      })

      if($routeParams.productID) {
        appService.showListing($routeParams.productID).then(function (data){
          console.log(data)
          $scope.product = data.data.results[0]
        })
      }
      $scope.addToCart = function(post){
        cartService.postItem(post)
       .then(function(data) {
         console.log(data)
       })
   }
  })

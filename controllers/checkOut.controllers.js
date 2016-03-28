angular
  .module('speedyCart')
  .controller('CheckOutController', function($scope,$location,cartService) {
      $scope.total = 0;

      cartService.getItem()
      .then(function(data) {
        console.log(data);
        $scope.listings = data.data;
      })

      cartService.getItem()
      .then(function(data){
        var total = 0;
        data.data.forEach(function(id){
          var parsePrice = parseFloat(id.price);
          $scope.total += parsePrice
        })
      })

      $scope.deleteItem = function(id) {
        cartService.deleteItem(id._id)
          .then(function(data) {
            console.log(data);
          })
          console.log(id);



          $scope.total -= parseInt(id.price);
          $scope.listings.splice(id,1);

      }

    })

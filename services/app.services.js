angular
  .module('speedyCart')
  .service('appService',function($http,$q) {
    var key = '1530f42dqx1lmlxijm85j9zt';

    var cors = 'https://free-cors-server.herokuapp.com/any-request/';
    var img = "&includes=MainImage";
    var url = encodeURIComponent('https://openapi.etsy.com/v2/listings/active?api_key=' + key + img);

   function getActiveListings() {
     return $http.get(cors + url);
   }

     function showListing(id) {
       return $http.get(cors + encodeURIComponent('https://openapi.etsy.com/v2/listings/' + id + '?api_key=' + key + img));
     }

      return {
        getActiveListings: getActiveListings,
        showListing: showListing
    }

  });

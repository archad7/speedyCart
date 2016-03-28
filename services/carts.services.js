angular
  .module('speedyCart')
  .service('cartService',function($http) {
    var url = "https://tiny-tiny.herokuapp.com/collections/speedyCart";

    function getItem() {
      return $http.get(url)
    }
    function postItem(post) {
      return $http.post(url,post);
    }

    function deleteItem(id) {
      return $http.delete(url + '/' + id);
    }

    return {
      getItem: getItem,
      postItem: postItem,
      deleteItem: deleteItem
    };
  })

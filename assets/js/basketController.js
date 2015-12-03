app.controller('basketController', function ($scope, basket) {

  $scope.basket = basket.get();

  $scope.decrementInBasket = function(id){
    basket.decrement(id, 1);
  }

  $scope.incrementInBasket = function(id){
    basket.increment(id, 1);
  }

  $scope.removeFromBasket = function(id){
    basket.remove(id);
  }

  $scope.testbtn = function() {
    basket.checkout();
  }

});

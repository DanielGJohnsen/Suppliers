app.controller('suppliersController', function ($scope, $http, $timeout, basket) {

	$scope.activeCategory = 0;

	$scope.categories = [];

	var allItems = [];
	$scope.items = [];

	$scope.basket = [];

	/*
	 * Load data
	 */

	$scope.init = function () {
		$http.get('/api/category').
			success(function (data, status, headers, config) {
				$scope.categories = data;
			}).
				error(function (data, status, headers, config) {
				console.log("Somthing went wrong");
			});

		$http.get('/api/item').
			success(function (data, status, headers, config) {
				data.forEach(function(item) {
					item.amount = 1;
				});
				allItems = data;
				$scope.items = data;
			}).
				error(function (data, status, headers, config) {
				console.log("Somthing went wrong");
		});
	};


	/*
	 * Change categories
	 */

	$scope.changeCategory = function(id) {
		$scope.activeCategory = id;

		if(id == 0) {
			$scope.items = allItems;
		} else {
			$scope.items = [];

			for(var i = 0; i < allItems.length; i++) {
				if(allItems[i].category_id == id) {
					$scope.items.push(allItems[i]);
				}
			}
		}
	}

	/*
	 * Basket
	 */

	 $scope.addToBasket = function(item) {
		 basket.add(item);
	 }

	 $scope.incrementValue = function(item) {
		 item.amount+1;
	 }

	 $scope.decrementValue = function(item) {
		 if(item.amount > 1) {
 		 	item.amount-1;
		 }
	 }

});

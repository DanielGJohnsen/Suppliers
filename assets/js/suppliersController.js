app.controller('suppliersController', function ($scope, $http, $timeout) {

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
				allItems = data;
				$scope.items = data;
			}).
				error(function (data, status, headers, config) {
				console.log("Somthing went wrond");
		});
	};


	/*
	 * Change categoryls
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

	 // do somthing with this: https://docs.angularjs.org/guide/services


});

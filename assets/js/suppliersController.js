app.controller('suppliersController', function ($scope, $http, $timeout, basket, users) {

	$scope.activeCategory = 0;

	$scope.customItem = false;
	$scope.askCustomItem = true;

	$scope.showCategories = true;
	$scope.hideCategories = false;

	$scope.showMoreInfo = true;
	$scope.hideMoreInfo = false;

	$scope.moreInfo = false;

	$scope.categories = [];

	var allItems = [];
	$scope.items = [];

	$scope.basket = [];
	$scope.users = [];

	/*
	 * Load data
	 */

	$scope.init = function () {
		users.getAllUsers(function (data) {
			console.log(data);
			$scope.users = data.users;
		});

		/*
		$http.get('https://play.dhis2.org/demo/api/users')
		 .success(function (data) {
			 console.log("success", data);
		 })
		 .error(function (data) {
			 console.log("fail", data);
		 });

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
*/
	};


	/*
	 * Change categories
	 */

	$scope.showHideCategories = function() {
		if($scope.showCategories) {
			$scope.showCategories = false;
			$scope.hideCategories = true;
		} else {
			$scope.showCategories = true;
			$scope.hideCategories = false;
		}

	}

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
	 *
	 */

	$scope.toggleMoreInfo = function(item) {
		if($scope.showMoreInfo) {
			$scope.showMoreInfo = false;
			$scope.hideMoreInfo = true;
			$scope.moreInfo = true;
		} else {
			$scope.showMoreInfo = true;
			$scope.hideMoreInfo = false;
			$scope.moreInfo = false;
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

	 /*
	  * Add custom item
		*/

	 $scope.toggleCustomItem = function() {
		 if($scope.customItem) {
			 $scope.askCustomItem = true;
			 $scope.customItem = false;
		 } else {
			 $scope.customItem = true;
			 $scope.askCustomItem = false;
		 }
	 }

	 $scope.closeCustomItem = function() {
		 $scope.customItem = false;
		 $scope.askCustomItem = true;
	 }

	 /*
	 	* Users
		*/





});

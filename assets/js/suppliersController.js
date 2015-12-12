app.controller('suppliersController', function ($scope, $http, $timeout, basket, users) {

	$scope.activeCategory = 0;

	$scope.customCommodity = true;
	$scope.addCustomCommodity = false;

	$scope.chooseDepPer = true;
	$scope.confirm = false;

	$scope.showCategories = true;
	$scope.hideCategories = false;

	$scope.showMoreInfo = true;
	$scope.hideMoreInfo = false;

	$scope.moreInfo = false;

	$scope.categories = [];

	var allItems = [];
	$scope.items = [];

	$scope.commodity = [];

	$scope.newCommodityForm = {
        Name: "",
        Amount: ""
    };

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
	 * Toggle more info
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

	$scope.incrementValue = function(commodity) {
		commodity.amount+1;
	}

	$scope.decrementValue = function(commodity) {
		if(item.amount > 1) {
 			commodity.amount-1;
		}
	}

	/*
	 * Add costume commodity
	 */
	
	$scope.addCCToBasket = function() {
		basket.add($scope.newCommodityForm);
	}

	$scope.toggleCustomCommodity = function() {
		if($scope.customItem) {
			$scope.addCustomCommodity = true;
			$scope.customCommodity = false;
		} else {
			$scope.addCustomCommodity = false;
			$scope.customCommodity = true;
		}
	}

	$scope.closeCustomCommodity	 = function() {
		$scope.addCustomCommodity = true;
		$scope.customCommodity = false;
	}

	/*
	 * Checkout
	 */
	
	$scope.confirmOrder = function() {
		$scope.chooseDepPer = false;
		$scope.confirm = true;
	}

	$scope.backToThePast = function () {
		$scope.chooseDepPer = true;
		$scope.confirm = false;
	}

	$scope.checkoutOrder = function() {
		$scope.chooseDepPer = true;
		$scope.confirm = false;
	}






});

app.controller('suppliersController', function ($scope, $http, $timeout, basket, users, commodities, categories) {

	$scope.activeCategory = 0;

	$scope.customCommodity = true;
	$scope.addCustomCommodity = false;

	$scope.showCategories = true;
	$scope.hideCategories = false;

	$scope.showMoreInfo = true;
	$scope.hideMoreInfo = false;

	$scope.moreInfo = false;

	var allCommodities = commodities;
	$scope.commodities = commodities;
	$scope.commodities.forEach(function (commodities) {
		commodities.amount = 1;
	});

	$scope.categories = categories;

	$scope.newCommodityForm = {
        name: "",
        amount: 1
    };

	$scope.users = [];
	$scope.userGroups = [];

	/*
	 * Load data
	 */

	$scope.init = function () {
		users.getAllUsers(function (data) {
			$scope.users = data.users;
		});

		users.getAllUserGroups(function (data) {
			console.log(data);
			$scope.userGroups = data.userGroups;
		});
	}



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
			$scope.commodities = allCommodities;
		} else {
			$scope.commodities = [];

			for(var i = 0; i < allCommodities.length; i++) {
				if(allCommodities[i].category_id == id) {
					$scope.commodities.push(allCommodities[i]);
				}
			}
		}
	}

	/*
	 * Toggle more info
	 */

	$scope.toggleMoreInfo = function(commodity) {
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

	$scope.addToBasket = function(commodity) {
		commodity.amount = parseInt(commodity.amount);
		basket.add(commodity);
	}

	$scope.incrementValue = function(commodity) {
		commodity.amount++;
	}

	$scope.decrementValue = function(commodity) {
		if(commodity.amount > 1) {
 			commodity.amount--;
		}
	}	

	/*
	 * Add costume commodity
	 */
	
	$scope.addCustomCommodityToBasket = function() {
		$scope.newCommodityForm.amount = parseInt($scope.newCommodityForm.amount);
		basket.add($scope.newCommodityForm);
	}

	$scope.toggleCustomCommodity = function() {
		if($scope.customCommodity) {
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

});

app.controller('basketController', function ($http, $scope, $filter, basket, users) {

	$scope.basket = basket.get();
	
	$scope.receiver = {};
	$scope.users = [];

	$scope.chooseReceiver = true;
	$scope.confirm = false;
	
	/*
	 * Load data
	 */
	$scope.init = function () {
		users.getAllUsers(function (data) {
			$scope.users = data.users;
		});
	}

	$scope.decrementInBasket = function (commodity) {
		basket.decrement(commodity, 1);
	};

	$scope.incrementInBasket = function (commodity) {
		basket.increment(commodity, 1);
	};

	$scope.removeFromBasket = function (commodity) {
		basket.remove(commodity);
	};

	/*
	 * Checkout
	 */
	
	$scope.confirmOrder = function() {
		$scope.chooseReceiver = false;
		$scope.confirm = true;
	}

	$scope.backToThePast = function () {
		$scope.chooseReceiver = true;
		$scope.confirm = false;
	}

	$scope.checkoutOrder = function() {
		$scope.chooseReceiver = true;
		$scope.confirm = false;
	}

	$scope.checkout = function () {
		var date = $filter('date')(new Date(), 'yyyy-MM-dd');

		var commodities = "";

		basket.get().forEach(function(commodity) {
			commodities += commodity.name + ": " + commodity.amount +
			" unit" + (commodity.amount > 1 ? "s" : "") + "\n";
		});

		$http.post('https://play.dhis2.org/demo/api/messageConversations', {
			"subject": "Commodity order form submitted (" + date + ")",
			"text": commodities,
			"users": [{"id": $scope.receiver.id}]
		}).
		success(function (data) {
			basket.clear();
			$scope.basket = basket.get();
			$('#checkoutModal').modal('hide');
		}).
		error(function () {
			console.log("Somthing went wrong");
		});
	};
});

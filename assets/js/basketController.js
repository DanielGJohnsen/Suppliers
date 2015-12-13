app.controller('basketController', function ($http, $scope, $filter, basket) {

	$scope.chooseReceiver = true;
	$scope.confirm = false;

	$scope.receiver = {};

	$scope.basket = basket.get();

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

		if (window.location.host === "play.dhis2.org") {
			$http.post('https://play.dhis2.org/demo/api/messageConversations', {
				"subject": "Commodity order form submitted (" + date + ")",
				"text": commodities,
				"users": [{"id": $scope.receiver.id}]
			}).
			success(function (data) {
				basket.clear();
			});
		} else {
			console.log("Would have POSTed this:", {
				"subject": "Commodity order form submitted (" + date + ")",
				"text": commodities,
				"users": [{"id": $scope.receiver.id}]
			});
			basket.clear();
		}

	};
});

app.controller(SuppliersController), function ($scope, $http, $timeout) {
	
	var allCategories = [];
	$scope.categories = [];
	$scope.activeCategory = $scope.ALL_ITEMS;
	
	var allItems = [];
	$scope.items = [];
	
	var allBasket = [];
	$scope.basket = [];
	
	/*
	 * Load data
	 */
	
	 $scope.init = function () {
	        $http.get('api/Category').
	            success(function (data, status, headers, config) {
	                $scope.categories = data;
	            }).
	            error(function (data, status, headers, config) {
	                console.log("Somthing went wrong");
	            });

	        $http.get('api/Item').
	            success(function (data, status, headers, config) {
	                allFaqs = data;
	                $scope.changeCategory($scope.ALL_ITEMS);
	            }).
	            error(function (data, status, headers, config) {
	                console.log("Somthing went wrond");
	            });
	    };
	
	/*
	 * Change category
	 */
	
	$scope.changeCategory = function(id) {
		$scope.activeCategory = id;
		
		if(id)
	}
}
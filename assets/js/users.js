app.factory('users', function($http, $window) {
	return {
		getAllUsers: function(callback) {
			$http.get('https://play.dhis2.org/demo/api/users').
			success(function (data) {
				callback(data);
			}).
			error(function () {
				console.log("Somthing went wrong");
			});
		}
	};
});

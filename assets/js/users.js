app.factory('users', function($http, $window) {

  return {
    getAllUsers: function(callback) {
      if ($window.location.host === "play.dhis2.org") {
        $http.get('https://play.dhis2.org/demo/api/users').
          success(function (data) {
            callback(data);
          }).
          error(function () {
            console.log("Somthing went wrong");
          });
      } else {
        callback({
          "pager": {
            "page": 1,
            "pageCount": 1,
            "total": 22
          },
          "users": [
            {
              "lastUpdated": "2015-12-08T17:29:39.716+0000",
              "created": "2015-10-19T12:46:51.527+0000",
              "name": "admin admin",
              "id": "wj0nnd9Lo0M",
              "href": "https://play.dhis2.org/demo/api/users/wj0nnd9Lo0M"
            }
          ]
        });
      }
    }
  };

});

app.factory('basket', function($cookies, $http) {
  var basket = $cookies.getObject('basket') || [];

  return {
    add: function(newCommodity) {
      if(newCommodity.amount < 1) {
        newCommodity.amount = 0;
      }
      var isNew = true;
      basket.forEach(function(commodity) {
        if (newCommodity.name == commodity.name) {
          commodity.amount = parseInt(commodity.amount) + parseInt(newCommodity.amount);
          isNew = false;
        }
      });
      if (isNew) {
        basket.push(angular.copy(newCommodity));
      }

      $cookies.putObject('basket', basket);
    },

    get: function() {
      return basket;
    },

    decrement: function(commodity, amount) {
      basket.forEach(function(item) {
        if(commodity.name === item.name) {
           if(commodity.amount > 1) {
             commodity.amount--;
           }
        }
      });

      $cookies.putObject('basket', basket);
    },

    increment: function(commodity, amount) {
      basket.forEach(function(item) {
        if(commodity.name === item.name) {
          commodity.amount++;
        }
      });

      $cookies.putObject('basket', basket);
    },

    remove: function(commodity) {
      for(var i = 0; i < basket.length; i++) {
        if(basket[i].name === commodity.name) {
          basket.splice(i, 1);
        }
      }

      $cookies.putObject('basket', basket);
    },

    clear: function () {
      console.log("clear");
      basket = [];
      $cookies.putObject('basket', basket);
      
    }
  };

});

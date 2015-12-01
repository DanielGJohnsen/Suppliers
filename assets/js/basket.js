app.factory('basket', function($cookies) {
  var basket = $cookies.getObject('basket') || [];

  return {
    add: function(newItem) {
      if(newItem.amount < 1) {
        newItem.amount = 0;
      }
      var isNew = true;
      basket.forEach(function(item) {
        if(newItem.id == item.id) {
          item.amount = item.amount + newItem.amount;
          isNew = false;
        }
      });
      if(isNew) {
        basket.push(newItem);
      }

      $cookies.putObject('basket', basket);
    },

    get: function() {
      return basket;
    },

    decrement: function(id, amount) {
      basket.forEach(function(item) {
        if(item.id === id) {
           if(item.amount > 1) {
             item.amount--;
           }
        }
      });

      $cookies.putObject('basket', basket);
    },

    increment: function(id, amount) {
      basket.forEach(function(item) {
        if(item.id === id) {
          item.amount++;
        }
      });

      $cookies.putObject('basket', basket);
    },

    remove: function(id) {
      for(var i = 0; i < basket.length; i++) {
        if(basket[i].id === id) {
          basket.splice(i,1);
        }
      }

      $cookies.putObject('basket', basket);
    }
  };

});

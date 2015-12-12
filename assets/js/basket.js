app.factory('basket', function($cookies, $http) {
  var basket = $cookies.getObject('basket') || [];

  return {
    add: function(newItem) {
      if(newItem.amount < 1) {
        newItem.amount = 0;
      }
      var isNew = true;
      basket.forEach(function(item) {
        if(newItem.name == item.name) {
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

            console.log(basket);
    },

    remove: function(id) {
      for(var i = 0; i < basket.length; i++) {
        if(basket[i].id === id ) {
          basket.splice(i,1);
        }
      }

      $cookies.putObject('basket', basket);
    },

    checkout: function(){
      var commodities = "";

      basket.forEach(function(item) {
        commodities += item.name + ": " + item.amount +
                       " unit" + (item.amount > 1 ? "s" : "") + "\n";
      });

      if (window.location.host === "play.dhis2.org") {
        $http.post('https://play.dhis2.org/demo/api/messageConversations', {
          "subject": "Commodity order form submitted",
          "text": commodities,
          "users": [{"id": "PhzytPW3g2J"}]
        }).
        success(function (data) {
          basket = {};
     			$cookies.putObject('basket', basket);
     		});
      } else {
        console.log("Would have POSTed this:", {
          "subject": "Commodity order form submitted",
          "text": commodities,
          "users": [{"id": "PhzytPW3g2J"}]
        });
      }


    }
  };

});

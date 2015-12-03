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
      commodities += item.name + " - " + item.amount + "\n";
    });

    var title = "User.name order"

    var request = $.ajax({
			  type: 'POST',
			  url: 'https://play.dhis2.org/demo/api/messageConversations',
			  dataType: 'json',
			  username: 'admin',
			  contentType: 'application/json',
			  crossDomain: true,
			  password: 'district',
			  data: JSON.stringify({"subject": title, "text": commodities, "users": [ {"id": "PhzytPW3g2J"}]})
			  });

			  request.done(function(data) {
			  console.log("Success!");
			  });
  }
};

});

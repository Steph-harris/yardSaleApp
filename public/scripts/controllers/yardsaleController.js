app.controller('yardsaleController', function($http){
  var yardsale = this;
  yardsale.itemList = [];
  yardsale.itemComment = [];
  //form to log in(send this info to server)
  yardsale.login = function(){
    yardsale.loggedIn = true;
    //post User details
    var User = {
      username: yardsale.username,
      password: yardsale.password,
      money: 1000
    };
    $http({
      method: 'POST',
      url: "/login",
      data: User
    }).then(function(result){
      console.log(result);
      yardsale.username = result.data.username;
      yardsale.money = result.data.money;
      yardsale.userId = result.data._id;
    });
  }
  //allow user to sign out
  yardsale.logout = function(){
    yardsale.loggedIn = false;
    yardsale.username = '';
    yardsale.password = '';
  }
  //show user available funds and items bought

  //form to add an item
  yardsale.addItem = function (){
    var Item = {
      // update owner when bought
      _owner: yardsale.userId,
      name: yardsale.itemName,
      description: yardsale.itemDescription,
      price: yardsale.itemPrice,
      sold: false
    };
    $http({
      method:'POST',
      url:'/items',
      data:Item
    }).then(function(result){
    yardsale.itemId = result.data._id
    yardsale.itemList.push(result.data);
    //BUG: username not added until refresh
    //BUG: item id only added from here
    yardsale.itemName = '';
    yardsale.itemDescription = '';
    yardsale.itemPrice = '';
    });
  }

  //get items for sale, add them to array to be looped
  yardsale.getItems = function(){
    $http({
      method: 'GET',
      url: '/items'
    }).then(function(result){
      yardsale.itemId = result.data._id
      console.log(result.data);
      angular.forEach(result.data, function(singleItem){
        yardsale.itemList.push(singleItem);
      });
    });
  }

  //form to comment on an item
  yardsale.addComment = function(){
    var Comment = {
      _owner: yardsale.userId,
      _item: yardsale.itemId,
      comment: yardsale.itemComment
    };
    $http({
      method: 'POST',
      url: '/comments',
      data: Comment
    }).then(function(result){
      console.log(result.data);
    });
  }
  //call get item function on page load
    yardsale.getItems();
  });

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
      console.log("Response from logging in ");
      console.log(result.data);
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
  //Allow user to buy an item, add its objID to collItems
  yardsale.buyItem = function()

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
    }).then(function(item){
    yardsale.itemId = item.data._id
    yardsale.itemList.push(item.data);
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
    }).then(function(item){
      yardsale.itemId = item.data._id
      console.log("Get request for items on page load ");
      console.log(item.data);
      angular.forEach(item.data, function(singleItem){
        yardsale.itemList.push(singleItem);
      });
    });
  }

  //form to comment on an item
  yardsale.addComment = function(idx){
    console.log(idx);
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

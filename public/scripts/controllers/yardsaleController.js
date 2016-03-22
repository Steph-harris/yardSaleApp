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
      yardsale.username = result.data.username;
      yardsale.money = result.data.money;
    });
  }
  //allow user to sign out
  yardsale.logout = function(){
    yardsale.loggedIn = false;
    yardsale.username = '';
    yardsale.password = '';
  }
  //show username w/ available funds and items bought

  //form to add an item
  yardsale.addItem = function (){
    var Item = {
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
    yardsale.itemList.push(result.data);
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
      angular.forEach(result.data, function(singleItem){
        yardsale.itemList.push(singleItem);
      });
    });
  }

  //form to comment on an item
  yardsale.addComment = function(){
    var Comment = {
      comment: yardsale.itemComment
    };
    $http({
      method: 'POST',
      url: '/comments',
      data: Comment
    }).then(function(result){
      console.log(result);
    });
  }
  //call get item function on page load
    yardsale.getItems();
  });

app.controller('yardsaleController', function($http){
  var yardsale = this;
//form to log in(send this info to server)
yardsale.login = function(){
  yardsale.loggedIn = true;
  //post User details
  var User = {
    username: yardsale.username,
    password: yardsale.password
  };
  $http({
    method: 'POST',
    url: "/login",
    data: User
  }).then(function(result){
    var username = yardsale.username
    console.log(result);
    username: result.data.username;
  });
}
//allow user to sign out

//show username w/ available funds and items bought

//form to post an item

//form to comment on an item

//get items for sale, add them to array to be looped

//call get item function on page load
});

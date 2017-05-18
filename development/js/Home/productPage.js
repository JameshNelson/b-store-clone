angular.module('bStore')
.controller('productPage', function($scope, mainService, $stateParams, $rootScope){
  var getClassicGames = function(){
  mainService.getClassicGames().then(function(response){
   var classics = response.data;
   for (var i = 0; i < classics.length; i++){
     if (classics[i].name){
       classics[i].gameUrl = classics[i].name.split(" ").join("")
     }
     if (classics[i].gameUrl.toLowerCase() == $stateParams.game.toLowerCase()) {
       console.log("FOUND", classics[i]);
       $scope.thisGame = classics[i];
      $rootScope.backimage = $scope.thisGame.background
       return;
     }
   }
  })
}

  getClassicGames();


$scope.stripe = function(){
     var handler = StripeCheckout.configure({
      key: 'pk_test_zpRONBjxlVGJMjgVWn0iIBIm',
      image: '/img/documentation/checkout/marketplace.png',
      locale: 'auto',
      token: function(token) {
        // Use the token to create the charge with a server-side script.
        // You can access the token ID with `token.id`
      }
    });

    handler.open({
    name: "Blizzard-Clone",
    description: 'Game',
    amount: 999
  });
}

});

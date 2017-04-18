angular.module('bStore')
.controller('productPage', function($scope, mainService, $stateParams){
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
       return;
     }
   }
  })
}
  getClassicGames();
});

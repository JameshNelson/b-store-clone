angular.module("bStore")
.controller('homeCtrl', function($scope, mainService) {
   $scope.test = 'homeCtrl works';

   $scope.getClassicGames = function(){
  mainService.getClassicGames().then(function(response){
    console.log(response);
    $scope.classics = response.data;
    for (var i = 0; i < $scope.classics.length; i++){
      if ($scope.classics[i].name){
        $scope.classics[i].gameUrl = $scope.classics[i].name.split(" ").join("")
        console.log($scope.classics[i].name);
      }
    }
  })
}
$scope.getClassicGames();

$scope.getTestGame = function(){
  mainService.getTestingGame().then(function(response){
    console.log(response);
    $scope.tests = response.data
  })
}

$scope.getTestGame();


});

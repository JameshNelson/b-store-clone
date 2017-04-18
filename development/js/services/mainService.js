angular.module('bStore')
.service('mainService', function($http){

  this.getClassicGames = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/store/classic"
    })
  }

  this.getTestingGame = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/store/testing"
    })
  }

})

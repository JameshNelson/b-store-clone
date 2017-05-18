angular.module('bStore')
.service('mainService', function($http){

  this.getClassicGames = function(){
    return $http({
      method: "GET",
      url: "http://localhost:3000/store/classic"
    })
  }

  // this.getDiablo = function(){
  //   return $http({
  //     method: "GET",
  //     url: "http://localhost:3000/store/diablo3"
  //   })
  // }
  //
  // this.getOverwatch = function(){
  //   return $http({
  //     method: "GET",
  //     url: "http://localhost:3000/store/overwatch"
  //   })
  // }
  //
  // this.getOverwatch = function(){
  //   return $http({
  //     method: "GET",
  //     url: "http://localhost:3000/store/overwatch"
  //   })
  // }

})

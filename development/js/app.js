angular.module("bStore", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');

       $stateProvider
           .state('home', {
               templateUrl: '../views/home.html',
               controller: 'homeCtrl',
               url: '/'
           })

           .state('productPage', {
             templateUrl: '../views/productPage.html',
             controller: 'productPage',
             url: '/product/:game'
           })

 });

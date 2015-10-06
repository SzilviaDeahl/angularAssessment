var app = angular.module('Kittens', ['ui.router']);

  app.config(function ($stateProvider) {
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'index'
    })
    // .state('show', {
    //   url:'/kittens/:id',
    //   templateUrl: '',
    // })
  })

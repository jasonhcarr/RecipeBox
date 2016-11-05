var RecipeBox = angular.module('RecipeBox', ['ui.router']);

RecipeBox.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('recipe-box', {
        url: '/',
        abstract: true,
        template: '<ui-view></ui-view>'
    }).state('recipe-box.index', {
        url: '',
        templateUrl: './templates/welcome.html',
        controller: 'WelcomeController'
    }).state('recipe-box.login', {
        url: 'login',
        templateUrl: './templates/login.html',
        controller: 'LoginController'
    }).state('recipe-box.register', {
        url: 'register',
        templateUrl: './templates/register.html',
        controller: 'RegisterController'
  }).state('recipe-box.box', {
        url: 'recipe-box',
        templateUrl: './templates/recipe-box.html',
        controller: 'RecipeBoxController'
  }).state('recipe-box.search', {
        url: 'search',
        templateUrl: './templates/search.html',
        controller: 'SearchController'
    });
});

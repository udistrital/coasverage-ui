'use strict';

/**
 * @ngdoc overview
 * @name coasverageUiApp
 * @description
 * # coasverageUiApp
 *
 * Main module of the application.
 */
angular
  .module('coasverageUiApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

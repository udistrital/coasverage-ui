'use strict';

var env = {};
if (window) {
  Object.assign(env, window.__env);
}

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
  .constant('__env', env)
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .factory('Coverages', ['$resource', '__env', function($resource, __env) {
    return $resource(__env.apiBaseUrl + '/coverages', null,
        {
          'get': {
            method: 'GET',
            isArray: true
          }
        });
  }]);

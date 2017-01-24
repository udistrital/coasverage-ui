'use strict';

/**
 * @ngdoc function
 * @name coasverageUiApp.controller:CoverageListController
 * @description
 * # CoverageListController
 * Controller of the coasverageUiApp
 */
angular.module('coasverageUiApp')
  .controller('CoverageListController', function () {
    var coverageList = this;
    coverageList.coverages = [];
    coverageList.coverages.push({
      level: "danger",
      app_name: "app_2",
      code_coverage: 10.13
    });
    coverageList.coverages.push({
      level: "info",
      app_name: "app_1",
      code_coverage: 80.12
    });
  });

'use strict';

/**
 * @ngdoc function
 * @name coasverageUiApp.controller:CoverageListController
 * @description
 * # CoverageListController
 * Controller of the coasverageUiApp
 */
angular.module('coasverageUiApp')
  .controller('CoverageListController', ['Coverages', function (Coverages) {
    var coverageList = this;
    coverageList.coverages = [];
    Coverages.get(function(coverages) {
      coverages.forEach(function(coverage) {
        // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
        var codeCoverage = coverage.code_coverage;
        // jscs:enable
        var level = '';
        if ( codeCoverage < 25) {
          level = 'danger';
        } else if ( codeCoverage >= 25 && codeCoverage < 50) {
          level = 'warning';
        } else if ( codeCoverage >= 50 && codeCoverage < 75) {
          level = 'info';
        } else if ( codeCoverage >= 75) {
          level = 'success';
        }
        coverage.level = level;
        coverageList.coverages.push(coverage);
      });
    });
  }]);

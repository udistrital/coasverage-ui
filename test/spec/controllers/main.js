'use strict';

describe('Controller: CoverageListController', function () {

  // load the controller's module
  beforeEach(module('coasverageUiApp'));

  var CoverageListController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CoverageListController = $controller('CoverageListController', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  // TODO: rewrite for actual app
  it('assert true=true', function () {
    expect(true).toBe(true);
  });
});

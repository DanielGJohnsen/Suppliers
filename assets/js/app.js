var app = angular.module('suppliers', ['ngMockE2E'])
  .run(function ($httpBackend) {
    $httpBackend.whenGET('/api/category').respond(['cat_1', 'cat_2']);
  });

describe("Main controller", function() {

  beforeEach(module('flapperNews'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  it("says hello world", function() {
    var $scope = {};
    var controller = $controller('MainCtrl', {$scope: $scope });
    expect($scope.test).toEqual('Hello world!')
  });

  it("contain posts", function() {
    var $scope = {};
    var controller = $controller('MainCtrl', {$scope: $scope });
    expect($scope.posts[0]).toEqual('post 1')
  });
});
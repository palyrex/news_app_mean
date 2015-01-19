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
    expect($scope.posts.length).toEqual(5)
  });

  it("contain posts title and upvotes", function() {
    var $scope = {};
    var controller = $controller('MainCtrl', {$scope: $scope });
    expect($scope.posts[0].title).toEqual('post 1')
    expect($scope.posts[0].upvotes).toEqual(5)
  });

  it("receives user input", function() {
    var $scope = {};
    var controller = $controller('MainCtrl', {$scope: $scope });
    expect($scope.posts.length).toEqual(5)
    $scope.addPost()
    expect($scope.posts.length).toEqual(6)
  });
});
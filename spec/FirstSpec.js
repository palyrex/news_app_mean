describe("Main controller", function() {

  beforeEach(module('flapperNews'));

  var $controller;

  beforeEach(inject(function(_$controller_){
    $controller = _$controller_;
  }));

  var $scope;
  var controller;

  beforeEach(function() {
    $scope = {};
    controller = $controller('MainCtrl', {$scope: $scope });
  });


  it("says hello world", function() {
    expect($scope.test).toEqual('Hello world!');
  });

  it("contain posts", function() {
    expect($scope.posts.length).toEqual(5);
  });

  it("contain posts title and upvotes", function() {
    expect($scope.posts[0].title).toEqual('post 1');
    expect($scope.posts[0].upvotes).toEqual(5);
  });

  it("receives user input", function() {
    expect($scope.posts.length).toEqual(5);
    $scope.title = "Hello Jack";
    $scope.addPost();
    expect($scope.posts.length).toEqual(6);
    expect($scope.posts[5].title).toEqual("Hello Jack");
  });

  it("doesn't display empty user input", function() {
    $scope.addPost();
    expect($scope.posts.length).toEqual(5);
  });

  it("increment upvotes for post", function() {
    $scope.incrementUpvotes($scope.posts[0]);
    expect($scope.posts[0].upvotes).toEqual(6);
  });

  it("adds link to post", function() {
    $scope.title = "MA";
    $scope.link = "makersacademy.com";
    $scope.addPost();
    expect($scope.posts[5].title).toEqual("MA");
    expect($scope.posts[5].link).toEqual("makersacademy.com");
  });
});
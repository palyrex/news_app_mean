angular.module('angularNews', ['ui.router'])
.config([
'$stateProvider',
'$urlRouteProvider',
function($stateProvider, $urlRouteProvider) {
  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl: '/home.html',
    controller: 'MainCtrl',
    resolve: {
      postPromise: ['posts', function(posts){
        return posts.getAll();
      }]
    }
  })
  .state('posts', {
    url: '/posts{id}',
    templateUrl: '/posts.html',
    controller: 'PostsCtrl'
  });

  $urlRouteProvider.otherwise('home');
}])
.service('posts', [$http, function($http) {
  var o = {
    posts: []
  };
  return o;
}])
.controller('MainCtrl', [
'$scope',
'posts', 
function($scope, posts){
  $scope.posts = posts.posts;
  $scope.addPost = function() {
    if(!$scope.title || $scope.title === "") { return; }
    posts.create({
      title: $scope.title, 
      link: $scope.link, 
      upvotes: 0,
      });
    $scope.title = "";
    $scope.link = "";
  };

  $scope.incrementUpvotes = function(post) {
    post.upvotes += 1;
  };
}])
.controller('PostsCtrl', [
'$scope',
'$stateParams',
'posts',
function($scope, $stateParams, posts) {
  $scope.posts = posts.posts[$stateParam.id];

  $scope.addComment = function() {
    if($scope.body ==='') { return; }
    $scope.posts.comments.push({
      body: $scope.body,
      author: 'user',
      upvotes: 0
    });
    $scope.body = '';
  };
}]);

o.getAll = function() {
  return $http.get('/posts').success(function (data) {
    angular.copy(data, o.posts);
  });
};

o.create = function(post) {
  return $http.post('/posts', post).success(function(data){
    o.posts.push(data);
  });
};
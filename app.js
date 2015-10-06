var app = angular.module('myTracker', []);
app.controlller('MainController', function ($scope) {
  $scope.showForm = false;
  $scope.toggleForm = function () {
    $scope.showForm = !$scope.showForm;
  }
  // $scope.submitPost = function () {
  //   $scope.posts.push($scope.post);
  //   $scope.post = {};
  // }
})

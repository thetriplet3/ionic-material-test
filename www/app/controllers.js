angular.module('material.controllers', [])

.controller('LoginCtrl', function($scope, $state, $ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.open = function() {
    $state.go('app.home', {});
  }
})

.controller('HomeCtrl', function($scope, $state, $ionicSideMenuDelegate) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.$on('$ionicView.enter', function(e) {

    $ionicSideMenuDelegate.canDragContent(true);
  });
});


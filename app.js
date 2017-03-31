var directiveMadness = angular.module('directiveMadness', []);


// Controller
// directiveMaddness.controller("ScopeCtrl",
//   ['$scope', function( $scope ){


directiveMadness.directive('topNav', function() {
  return {
    templateUrl: 'nav.html',
    restrict: 'A',
    scope: {}
  };
});

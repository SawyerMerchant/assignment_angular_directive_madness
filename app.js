var directiveMadness = angular.module('directiveMadness', []);


// Controller
// directiveMaddness.controller("ScopeCtrl",
//   ['$scope', function( $scope ){


directiveMadness.directive('mainNav', function() {
  return {
    templateUrl: 'nav.html',
    restrict: 'E'
  };
});

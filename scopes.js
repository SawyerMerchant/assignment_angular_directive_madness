directiveMadness.controller('ScopesCtrl',
  ['$scope',
    function($scope) {
      $scope.oneWay = 'one way variable';
      $scope.twoWay = 'two way variable';
      $scope.sayHello = function sayHello(name) {
        alert("Hello " + name);
      };
    }
  ]
);

directiveMadness.directive('isolated', [function() {
  return {
    templateUrl: 'isolated.html',
    restrict: 'E',
    scope: {
      twoWay: '=',
      oneWay: '@',
      sayHello: '&'
    },
    link: function(scope) {
      console.log("link function");
      scope.oneWay = "oneWay link";
      scope.twoWay = "twoWay link";
      var sayHi = scope.sayHello;
      scope.sayHello = function(name) {
        sayHi({name: name + " from isolated scope!"});
      };
    }
  };
}]);

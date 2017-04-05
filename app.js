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

directiveMadness.directive('mainHeader', function() {
  return {
    // template: "<h1><ng-transclude></ng-transclude></h1>",
    templateUrl: 'header.html',
    restrict: 'E',
    scope: {},
    transclude: true
  };
});

directiveMadness.directive('copyright', function() {
  return {
    templateUrl: "copyright.html",
    restrict: 'E',
    scope: {
      // date: "@"
    },
    transclude: true,
    link: function(scope, e, attributes) {
      var date = new Date();
      var elem = e.find('span')[0];
      elem.innerHTML = date.getFullYear();
      // e.find("span").text(date.getFullYear());
    }
  };
});

directiveMadness.directive('colorize', function() {
  return {
    restrict: 'A',
    scope: {
      color: "@",
      background: "@"
    },
    link: function(scope, element, attributes) {
      element.css({
        backgroundColor: attributes.background,
        color: attributes.color
      });
    }
  };
});

directiveMadness.directive('mouseEvents', function() {
  return {
    restrict: 'A',
    link: function(scope, e, attributes) {
      angular.element(document).on('mousedown', function() {
        angular.element('#mouse-button').text('Down');
      });
      angular.element(document).on('mouseup', function() {
        angular.element('#mouse-button').text('Up');
      });
      e.on('mouseover', function() {
        angular.element('#hover-state').text('Over');
      });
      e.on('mouseleave', function() {
        angular.element('#hover-state').text('Leave');
      });
      angular.element('#click-button').on('dblclick', function() {
        angular.element('#click-button').text("Double clickable");
      });
      angular.element('#click-button').on('click', function() {
        angular.element('#click-button').text("Clickable");
      });
    }
  };
});

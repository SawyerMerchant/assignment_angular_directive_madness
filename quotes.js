directiveMadness.controller('QuotesCtrl', ['$scope', function($scope) {
  $scope.quotes = [];
  $scope.addQuote = function(quote, form, valid) {
    if(valid) {
      var newQuote = {
        text: quote.text,
        author: quote.author
      };
      $scope.quotes.push(newQuote);
      angular.element('#quote-form input[type=text]').val('');
      form.$setPristine();
      form.$setUntouched();
    }
  };

  $scope.deleteQuote = function(quote) {
    var i = $scope.quotes.indexOf(quote);
    $scope.quotes.splice(i, 1);
  };

}]);

directiveMadness.directive('quoteForm', function() {
  return {
    templateUrl: "quoteForm.html",
    restrict: "E",
    scope: true,
  };
});

directiveMadness.directive('quoteIndex', function() {
  return {
    templateUrl: "quoteIndex.html",
    restrict: "E",
    scope: true,
  };
});

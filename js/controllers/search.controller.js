RecipeBox.controller('SearchController', function ($scope, SearchService, Recipe) {
  $scope.searchForRecipes = function(input) {
    var results = SearchService.recipes();
    results.then(function(data) {
      console.log(new Recipe(data));
    });
  };
});

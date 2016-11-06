RecipeBox.controller('SearchController', function ($scope, SearchService, Recipe) {
  $scope.searchForRecipes = function(input) {
    var results = SearchService.recipes();
    results.then(function(data) {
      // for () {
      //   array[i]
      // }
      console.log(new Recipe(data));
      console.log(data);
      $scope.results = data;
    });
  };
});

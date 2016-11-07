RecipeBox.controller('SearchController', function ($scope, SearchService, Recipe) {
  $scope.searchForRecipes = function(input) {
    var searchResults = SearchService.recipes(input);
    // results.then(function(data) {
    //   // for () {
    //   //   array[i]
    //   // }
    //   $scope.results = data;
    // });
    $scope.results = searchResults;
    if (searchResults === []) {
      alert('No Matching Recipes');
    }
  };
});

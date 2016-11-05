RecipeBox.controller('SearchController', function ($scope) {
  function searchForRecipes () {
    SearchService.recipes($scope.search.input);
  }
});

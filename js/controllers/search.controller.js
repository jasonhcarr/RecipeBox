RecipeBox.controller('SearchController', function ($scope, SearchService, Recipe, $state) {
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
  $scope.goToCreate = function(){
    $state.go('recipe-box.box');
  };
});

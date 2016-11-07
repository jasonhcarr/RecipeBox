RecipeBox.service('SearchService', function (RecipeService) {

  function searchForRecipes($http) {
    function fetchRecipe() {
      return $http({
        method: 'GET',
        url: './dummy-data/dummy.json'
      }).then(function successCallback(response) {
        return response.data;
      });
    }
  }

  function dummyFetch(query) {
    var results = RecipeService.search(query, 'name');
    return results;
  }
  return {
    recipes: dummyFetch
  };
});

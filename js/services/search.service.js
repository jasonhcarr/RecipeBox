RecipeBox.service('SearchService', searchForRecipes);
function searchForRecipes($http) {
  function fetchRecipe() {
    return $http({
      method: 'GET',
      url: './dummy-data/dummy.json'
    }).then(function successCallback(response) {
      return response.data;
    });
  }
    //     .then(function successCallback(response) {
    //       console.log(response);
    //     }, function errorCallback(response) {
    //         alert('Sorry, No Matching Recipes Found');
    //     });
    // };
    return {
        recipes: fetchRecipe
    };
}

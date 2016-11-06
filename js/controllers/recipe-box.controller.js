RecipeBox.controller('RecipeBoxController', function($scope, $state, RecipeService) {

    $scope.recipe = {
      name: "",
      userId: null,
      ingredients: [{
        name: "",
        quantity: 0,
        measure: ""
      }],
      yield: null,
      instructions: [{
        Step: ""
      }],
      parent: null,
      children: []
    };

    $scope.newLine = function(event) {
      console.log($scope.recipe);
        if (event.keyCode == 13) {
            event.preventDefault();
            $scope.recipe.ingredients.push({
                name: "",
                quantity: 0,
                measure: ""
            });
        }
    };

    $scope.createNewRecipe = function () {
      RecipeService.create($scope.recipe);
    };


});

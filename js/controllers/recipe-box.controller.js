RecipeBox.controller('RecipeBoxController', function($scope, $state, RecipeService) {

    $scope.recipe = {
        name: "New Recipe",
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

    $scope.newIngredient = function(event) {
      var form = $(this).parents('form:eq(0)'),
          focusable = $('form').find('input'),
          next = focusable.eq(focusable.index(this) + 1);
      if (event.keyCode == 13) {
          event.preventDefault();
          if (next.length) {
              next.focus();
          }
          $scope.recipe.ingredients.push({
              name: "",
              quantity: 0,
              measure: ""
          });
      }

    };


    $scope.newDirection = function(event) {
      var form = $(this).parents('form:eq(0)'),
          focusable = $('form').find('input'),
          next = focusable.eq(focusable.index(this) + 1);
      if (event.keyCode == 13) {
          event.preventDefault();
          if (next.length) {
              next.focus();
          }
          $scope.recipe.instructions.push({
              Step: ""
          });

      }

    };

    $scope.createNewRecipe = function() {
        RecipeService.dummyCreate($scope.recipe);
    };

});

RecipeBox.controller('RecipeBoxController', function($scope, $state, RecipeService) {

    $scope.recipe = {
        name: "New Recipe",
        id: "",
        userId: null,
        ingredients: [{
            name: "",
            quantity: null,
            measure: null
        }],
        yield: null,
        instructions: [{
            Step: ""
        }],
        parent: null,
        children: []
    };

    function resetForm() {
      $scope.newRecipe.$setPristine();
      $scope.recipe = {
          name: "New Recipe",
          id: "",
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
    }

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
              quantity: null,
              measure: null
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
        $scope.recipe.id = Date.now();
        console.log($scope.recipe.id);
        RecipeService.dummyCreate($scope.recipe);
        resetForm();
    };

    $scope.goToSearch = function() {
      $state.go('recipe-box.search');
    };

});

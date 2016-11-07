RecipeBox.service('RecipeService', function($http) {
  
    function createRecipe(recipe) {
      data = angular.toJson(data);
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://peaceful-journey-21229.herokuapp.com/api/recipe",
            "method": "POST",
            "headers": {
                "cache-control": "no-cache",
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": recipe
        };

        $.ajax(settings).done(function(response) {
            console.log(response);
        });
    }

    function findRecipe(query, type) {
      var results = [];
      for (var i = 0; i < dummy.recipes.length; i++) {
        var recipe = dummy.recipes[i];
        if (recipe[type].includes(query)) {
          results.push(recipe);
        }
      }
      return results;
    }

    function createDummy(recipe) {
      dummy.recipes.push(recipe);
    }

    function deleteDummy(recipe) {
      var index = dummy.recipes.indexOf(recipe);
      dummy.recipes.splice(index, 1);
    }

    function editDummy(recipe, idNumber) {
      var recipeToEdit = findRecipeById(idNumber);
      var index = dummy.recipes.indexOf(recipeToEdit);
      dummy.recipes[index] = recipe;
    }

    return {
        create: createRecipe,
        dummyCreate: createDummy,
        dummyEdit: editDummy,
        dummyDelete: deleteDummy,
        search: findRecipe
    };
});

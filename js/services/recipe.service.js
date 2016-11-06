RecipeBox.service('RecipeService', function($http) {
    function createRecipe(recipe) {
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

    return {
      create: createRecipe
    };
});

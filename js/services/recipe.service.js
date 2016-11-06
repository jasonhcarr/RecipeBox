RecipeBox.service('RecipeService', function($scope, $http) {
    function createRecipe(recipe) {
        var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://peaceful-journey-21229.herokuapp.com/api/users",
            "method": "POST",
            "headers": {
                "cache-control": "no-cache",
            },
            "processData": false,
            "contentType": false,
            "mimeType": "multipart/form-data",
            "data": form
        };

        $.ajax(settings).done(function(response) {
            console.log(response);
        });
    }
});

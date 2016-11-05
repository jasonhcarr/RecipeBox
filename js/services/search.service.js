RecipeBox.service('SearchService', function($http) {
    var searchForRecipes = function(input) {
        $http({
            method: 'GET',
            url: 'https://recipe-box-api2.herokuapp.com/' //needs to be updated when endpoint available
        }).then(function successCallback(response) {

        }, function errorCallback(response) {
            alert('Sorry, No Matching Recipes Found');
        });
    };
    return {
        recipes: searchForRecipes
    };

});

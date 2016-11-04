RecipeBox.controller('RegisterController', function ($scope, $state, EntryService) {
    $scope.registerSubmit = function () {
      console.log('register');
      EntryService.submit(login);
    };
});

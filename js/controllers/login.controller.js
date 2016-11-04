RecipeBox.controller('LoginController', function ($scope, $state, EntryService) {
  $scope.loginSubmit = function () {
    console.log(login);
    EntryService.submit(login);
  };
});

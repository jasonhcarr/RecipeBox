RecipeBox.controller('LoginController', function ($scope, $state, EntryService) {
  $scope.loginSubmit = function () {
    console.log($scope.login);
    EntryService.submit($scope.login);
  };
});

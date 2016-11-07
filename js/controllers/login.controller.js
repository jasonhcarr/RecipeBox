RecipeBox.controller('LoginController', function ($state, $scope, EntryService, VerifyService) {
  $scope.login = {
    name: "",
    password: ""
  };

  $scope.loginSubmit = function () {
    EntryService.login($scope.login);
    $state.go('recipe-box.box');
  };

  $scope.validEmail = function () {
    // VerifyService.email(email);
  };

  $scope.enterAsTab = function (event) {
    VerifyService.enter(event);
  };
});

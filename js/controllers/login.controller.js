RecipeBox.controller('LoginController', function ($scope, EntryService, VerifyService) {
  $scope.login = {
    email: "",
    password: ""
  };

  $scope.loginSubmit = function () {
    EntryService.login($scope.login);
  };

  $scope.validEmail = function () {
    console.log($scope.login.email);
    // VerifyService.email(email);
  };

  $scope.enterAsTab = function (event) {
    VerifyService.enter(event);
  };
});

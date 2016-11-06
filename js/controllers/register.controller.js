RecipeBox.controller('RegisterController', function ($scope, $state, EntryService, VerifyService) {
    $scope.registerSubmit = function () {
      EntryService.register($scope.register);
      $state.go('recipe-box.box');
    };

    $scope.validEmail = function () {
      // VerifyService.email($scope.register.email);
    };
});

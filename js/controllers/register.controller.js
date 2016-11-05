RecipeBox.controller('RegisterController', function ($scope, $state, EntryService, VerifyService) {
    $scope.registerSubmit = function () {
      EntryService.register($scope.register);
    };

    $scope.validEmail = function () {
      // VerifyService.email($scope.register.email);
    };
});

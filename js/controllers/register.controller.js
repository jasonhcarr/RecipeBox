RecipeBox.controller('RegisterController', function ($scope, $state, EntryService) {
    $scope.registerSubmit = function () {
      EntryService.submit($scope.register);
    };
});

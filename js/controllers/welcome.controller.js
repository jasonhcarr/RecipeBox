RecipeBox.controller('WelcomeController', function ($scope, $state) {
    $scope.goToRegister = function() {
      $state.go('recipe-box.register');
    };
    $scope.goToLogin = function() {
      $state.go('recipe-box.login');
    };
});

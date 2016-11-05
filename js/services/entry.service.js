RecipeBox.service('EntryService', function ($http, $state) {
  function submitInfo() {
    $http({
method: 'GET',
url: 'https://recipe-box-api2.herokuapp.com/authenticate'
}).then(function successCallback(response) {
  $state.go('recipe-box.box');
}, function errorCallback(response) {
  alert('Log-in Failed.  Please try again or register.');
  $state.go('recipe-box.index');
});
  }
  return {
    submit: submitInfo
  };
});

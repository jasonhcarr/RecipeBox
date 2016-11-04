RecipeBox.service('EntryService', function () {
  function submitInfo() {
    $http({
method: 'GET',
url: '/someUrl'
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

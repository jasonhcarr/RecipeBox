RecipeBox.service('EntryService', function($http, $state) {
    function registerUser(data) {
      console.log(data);
        // data = angular.toJson(data);
        return $http({
          method: 'POST',
          url: 'https://peaceful-journey-21229.herokuapp.com/api/users',
          data: data
        }).then(function successCallback() {
          console.log(response);
          // data = delete date.name;
          // console.log(data);
          // $http({
          //   method: 'POST',
          //   url: 'https://recipe-box-api2.herokuapp.com/authenticate',
          //   headers: data
          // }).then(function getAuthToken() {
          //   console.log(response);
          //   $state.go('recipe-box.box');
          // });
        }, function errorCallback(response) {
            alert('Log-in Failed.  Please try again or register.');
            $state.go('recipe-box.index');
        });
    }

    function getAuthToken(data) {
      // data = angular.toJson(data);
      $http({
          method: 'POST',
          url: 'https://recipe-box-api2.herokuapp.com/authenticate',
          data: data
      }).then(function successCallback(response) {
          console.log(response);
    });
}
    return {
        register: registerUser,
        login: getAuthToken
    };
});

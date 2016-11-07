RecipeBox.service('EntryService', function($http, $state) {
    function registerUser(data) {
        data = angular.toJson(data);
        var settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://peaceful-journey-21229.herokuapp.com/api/users",
          "method": "POST",
          "headers": {
            "cache-control": "no-cache",
          },
          "processData": false,
          "contentType": false,
          "mimeType": "multipart/form-data",
          "data": data
        };

        $.ajax(settings).done(function (response) {
           return response;
        });          // data = delete date.name;
          // $http({
          //   method: 'POST',
          //   url: 'https://recipe-box-api2.herokuapp.com/authenticate',
          //   headers: data
          // }).then(function getAuthToken() {
          //   $state.go('recipe-box.box');
          // });
        // }, function errorCallback(response) {
        //     alert('Log-in Failed.  Please try again or register.');
        //     $state.go('recipe-box.index');
        // });
    }

    function loginUser(data) {
      // data = angular.toJson(data);
      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://peaceful-journey-21229.herokuapp.com/api/user?name=" + data.name,
        "method": "GET",
        "headers": {
          "cache-control": "no-cache",
          // "postman-token": "512656be-e065-1867-645b-d73ba82cd80e"
        },
        "processData": false,
        "contentType": false,
        "mimeType": "multipart/form-data",
        "data": ""
      };

      $.ajax(settings).done(function (response) {
        return response;
      });
    }

    return {
        register: registerUser,
        login: loginUser
    };
});

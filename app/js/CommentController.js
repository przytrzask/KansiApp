
(function () {
    'use strict';
    angular.module('KansiApp').controller('usersController', function ($scope, $http, $q, MyService, $mdDialog, CurrentUser, getData, $route) {
        $scope.isLoading = true;
        $scope.hideOrShow = true;
        $scope.path = MyService.getCurrentUrl();
        $scope.url = "http://jsonplaceholder.typicode.com/posts/" + $scope.path[1] + "/comments";
        getData.getPosts($scope.url).then(function mySucces(response) {
            $scope.isLoading = false;
            $scope.hideOrShow = false;
            $scope.mydata = response.data;
        }, function myError(response) {
            $scope.error = response.statusText;
        });
        $scope.nextPage = function () {
            if ($scope.main.page < $scope.main.pages) {
                $scope.main.page++;
                $scope.getUsers();
            }
        };
        $scope.previousPage = function () {
            if ($scope.main.page > 1) {
                $scope.main.page--;
                $scope.getUsers();
            }
        }
        $scope.setUser = function (name) {
            CurrentUser.setUser(name);
        }
    });
})();
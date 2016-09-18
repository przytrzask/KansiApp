
(function () {
    'use strict';
    angular.module('KansiApp').controller('addPostController', function ($scope, $http, PostData, CurrentUser) {
        $scope.url = "http://jsonplaceholder.typicode.com/posts"
        $scope.data = {}
        $scope.message = '';
        $scope.submit = function () {
            $scope.isLoading = true;
            $scope.hideOrShow = true;
            PostData.submitPost($scope.url, $scope.data).then(function mySucces(response) {
                $scope.isLoading = false;
                $scope.hideOrShow = true;
                $scope.message = "Successful"
            }, function myError(response) {
                $scope.error = response.statusText;
                $scope.message = "Something went wrong"
            });
        }
    });
})();
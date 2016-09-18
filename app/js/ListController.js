
(function () {
    'use strict';
    angular.module('KansiApp').controller('ListController', function ($scope, $filter, $http, $q, getData, MyService) {
        $scope.userState = undefined;
        $scope.characterLimit = 60;
        $scope.pageCount = function () {
            return Math.ceil($scope.mydata.length / $scope.itemsPerPage);
        };
        $scope.setSelectedUrl = function (userId, id, title, body) {
            MyService.setCurrentUrl(userId, id, title, body);
        }
        $scope.isLoading = true;
        $scope.hideOrShow = true;
        $scope.url = "http://jsonplaceholder.typicode.com/posts";
        $scope.mydata = [];
        getData.getPosts($scope.url).then(function mySucces(response) {
            $scope.isLoading = false;
            $scope.hideOrShow = false;
            $scope.mydata = response.data;
            $scope.total = $scope.pageCount();
        }, function myError(response) {
            $scope.error = response.statusText;
        });
        $scope.paging = {
            itemsPerPage: 10,
            current: 1,
            align: 'center center',
            onPageChanged: loadPages,
        };
        function loadPages() {
            $scope.currentPage = $scope.paging.current;
        }
        $scope.itemsPerPage = 10;
        $scope.currentPage = 1;
        $scope.pagesArray = [];
    });
})();
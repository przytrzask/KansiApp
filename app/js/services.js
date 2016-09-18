(function () {
    'use strict';
    angular.module('KansiApp')
        .config(function ($mdThemingProvider) {
            $mdThemingProvider.theme('default')
                .primaryPalette('indigo')
                .accentPalette('blue-grey');
        })
        .config(function ($mdProgressCircularProvider) {
            $mdProgressCircularProvider.configure({
                progressSize: 100,
                strokeWidth: 10,
                duration: 400
            });
        })
        .config(function ($routeProvider) {
            $routeProvider

                .when('/', {
                    templateUrl: 'assets/templates/list.html',
                    controller: 'ListController'
                })

                .when('/comments', {
                    templateUrl: 'assets/templates/comments.html',
                    controller: 'usersController'
                })

                .when('/addPost', {
                    templateUrl: 'assets/templates/addPost.html',
                    controller: 'addPostController'
                }).otherwise({ redirectTo: '/' });
        })
        .factory('MyService', function () {  //comunicate between controllers

            var userId;
            var id;
            var title;
            var body;

            return {
                setCurrentUrl: function (param1, param2, param3, param4) {
                    userId = param1;
                    id = param2;
                    title = param3;
                    body = param4;
                },

                getCurrentUrl: function () {
                    return [userId, id, title, body]
                }
            }
        })

        .factory('CurrentUser', function () {
            var user = "";
            return {
                setUser: function (name) {
                    user = name;
                },
                getUser: function () {
                    return user;
                }
            }
        }).factory('getData', function ($http) {
            return {
                getPosts: function (urlAdress) {
                    return $http({
                        method: "GET",
                        url: urlAdress
                    })
                }
            };
        }).factory('PostData', function ($http) {
            return {
                submitPost: function (urlAdress, objects) {
                    return $http({
                        method: "POST",
                        url: urlAdress,
                        data: objects
                    })
                }
            };

        })
        .filter('offset', function () {
            return function (input, start) {
                start = parseInt(start, 10);
                return input.slice(start);
            };
        });

} ());
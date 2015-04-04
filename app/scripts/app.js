'use strict';

angular.module('landingPageApp', [
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeCtrl'
            })
            .when('/about', {
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .when('/code', {
                templateUrl: 'views/code.html',
                controller: 'CodeCtrl'
            })
            .otherwise({
                redirectTo: '/home'
            });
    });

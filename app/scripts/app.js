'use strict';

angular.module('landingPageApp', [
        'ngCookies',
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
            .otherwise({
                redirectTo: '/home'
            });
    });

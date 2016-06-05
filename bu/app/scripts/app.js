'use strict';

angular.module('landingPageApp', [
        'ngResource',
        'ngSanitize',
        'ngRoute'
    ])
    .config(function ($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
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
                redirectTo: '/'
            });
        $locationProvider.hashPrefix('!').html5Mode(true);
    });

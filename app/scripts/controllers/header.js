'use strict';

angular.module('landingPageApp')
    .controller('HeaderCtrl', function($scope, $location) {
    $scope.location = $location;
});
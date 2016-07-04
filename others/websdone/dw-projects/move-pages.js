/*
var app = angular.module('plunker', [
    'ngRoute',
    'ngAnimate'
]);

app.run(function($rootScope, $window) {
    // publish current transition direction on rootScope
    $rootScope.direction = 'ltr';
    // listen change start events
    $rootScope.$on('$routeChangeStart', function(event, next, current) {
        $rootScope.direction = 'rtl';
        // console.log(arguments);
        if (current && next && (current.depth > next.depth)) {
            $rootScope.direction = 'ltr';
        }
        // back
        $rootScope.back = function() {
            $window.history.back();
        }
    });
});

app.controller('MainCtrl', function($scope) {

});

app.config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'slide-1.html',
        depth:1
    }).when('/products', {
        templateUrl: 'slide-2.html',
        depth:2
    }).when('/products/category', {
        templateUrl: 'slide-3.html',
        depth:3
    })
});
*/
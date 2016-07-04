
// Create module
var websdoneApp = angular.module('websdoneApp', ['ngRoute', 'ngAnimate']);

// Configure route to pages
websdoneApp.config(function($routeProvider) {
	$routeProvider
	// routes go here
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'MainController'
	})
	.when('/about', {
		templateUrl : 'pages/about.html',
		controller : 'AboutController'
	})
	.when('/portfolio', {
		templateUrl : 'pages/portfolio.html',
		controller : 'AboutController'
	})
	.when('/contact', {
		templateUrl : 'pages/contactus.html',
		controller : 'ContactController'
	})
    .otherwise({ redirectTo: '/'});
});

// Create the controller and inject Angular's $scope
websdoneApp.controller('MainController', function($scope) {
	// create message for the page views
	//$scope.message = 'this is the home page';
	// Add class to the page
	$scope.pageClass = 'home';
});

websdoneApp.controller('ContactController', function($scope) {
	// create message for the page views
	//$scope.message = 'this is the home page';
	// Add class to the page
	$scope.pageClass = 'contact';
});

websdoneApp.controller('AboutController', function($scope) {
	// create message for the page views
	//$scope.message = 'this is the about page';
	// Add class to the page
	$scope.pageClass = 'about';
});

websdoneApp.controller('folderCtrl', function ($scope, $http) {
          $scope.w = window.innerWidth;
          $scope.h = window.innerHeight-20;
          $scope.uri = "http://lorempixel.com";
          $scope.folders = [
            'abstract',
            'animals',
            'business',
            'cats',
            'city',
            'food',
            'night',
            'life',
            'fashion',
            'people',
            'nature',
            'sports',
            'technics',
            'transport'
          ];
          $scope.images = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

          $scope.currentFolder = $scope.folders[0];
          $scope.selectFolder = function (folder) {
            $scope.currentFolder = folder;
          };
          $scope.activeFolder = function (folder) {
            return (folder === $scope.currentFolder) ? 'active' : '';
          };
        });
'use strict';
// Create module
var websdoneApp = angular.module('websdoneApp', ['ngRoute', 'ngAnimate', 'angular-carousel', 'ngSanitize']);

// Configure route to pages
websdoneApp.config(function( $locationProvider, $routeProvider) {
  $locationProvider.html5Mode(true);

	$routeProvider
	// routes go here
	.when('/', {
		templateUrl : 'pages/home.html',
		controller : 'MainController'
	})
	.when('/skills', {
		templateUrl : 'pages/skills.html',
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
	.when('/portfolio', {
		templateUrl : 'pages/portfolio.html',
		controller : 'PortfolioController'
	})
  // childs
	.when('/portfolio-arabasco', {
		templateUrl : 'pages/portfolio-arabasco.html',
		controller : 'arabasco'
	})
  .when('/portfolio-truphone', {
    templateUrl : 'pages/portfolio-truphone.html',
    controller : 'truphone'
  })
   .when('/portfolio-agatha', {
    templateUrl : 'pages/portfolio-agatha.html',
    controller : 'agatha'
  })
  .when('/portfolio-bupa', {
    templateUrl : 'pages/portfolio-bupa.html',
    controller : 'bupa'
  })
  .when('/portfolio-forduk', {
    templateUrl : 'pages/portfolio-forduk.html',
    controller : 'forduk'
  })
  .when('/portfolio-kobo', {
    templateUrl : 'pages/portfolio-kobo.html',
    controller : 'kobo'
  })
  .when('/portfolio-musicPlayer', {
    templateUrl : 'pages/portfolio-musicPlayer.html',
    controller : 'musicPlayer'
  })
  .when('/portfolio-nissan', {
    templateUrl : 'pages/portfolio-nissan.html',
    controller : 'nissan'
  })
  .when('/portfolio-sanmanuel', {
    templateUrl : 'pages/portfolio-sanmanuel.html',
    controller : 'sanmanuel'
  })
  .when('/portfolio-smokefree', {
    templateUrl : 'pages/portfolio-smokefree.html',
    controller : 'smokefree'
  })
  .when('/portfolio-updating', {
    templateUrl : 'pages/portfolio-updating.html',
    controller : 'ArabascoController'
  })
  .when('/portfolio-virginatlantic', {
    templateUrl : 'pages/portfolio-virginatlantic.html',
    controller : 'virginatlantic'
  })
  .when('/portfolio-bupaemail', {
    templateUrl : 'pages/portfolio-bupaemail.html',
    controller : 'bupaemail'
  })
    .otherwise({ redirectTo: '/'});

});

websdoneApp.use('/',express.static(__dirname + '/public'));

// Create the controller and inject Angular's $scope
websdoneApp.controller('MainController', function($scope) {
	// create message for the page views
	//$scope.message = 'this is the home page';
	// Add class to the page
	$scope.pageClass = 'home';
});

websdoneApp.controller('ContactController', function($scope) {
	$scope.pageClass = 'contact';
});

websdoneApp.controller('ArabascoController', function($scope) {
	$scope.pageClass = 'portfolio';
});

websdoneApp.controller('AboutController', function($scope) {
	$scope.pageClass = 'about';
});

websdoneApp.controller('PortfolioController', function($scope) {
	$scope.pageClass = 'portfolio';
});


websdoneApp.controller('Ctrl', function($scope, Carousel) {
    $scope.Carousel = Carousel;
});

// $(".btn").click(function(){
// 	$(".btn.active").removeClass('active');
// 	$(this).addClass('active');
// });
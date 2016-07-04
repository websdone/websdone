
angular.module('websdoneApp')

.directive('showWork',
    function() {
        return {
             restrict: 'AE',
            scope: true,
            templateUrl: 'pages/show-work.html' 
        };
    })

.directive('carouselBlock',
    function() {
        return {
             restrict: 'AE',
            scope: true,
            templateUrl: 'pages/carousel-block.html' 
        };
    })

.directive('pLanding',
    function() {
        return {
             restrict: 'AE',
            scope: true,
            templateUrl: 'pages/portfolio-landing.html' 
        };
    });
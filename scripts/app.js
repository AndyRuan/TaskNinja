'use strict';

var app = angular
  .module('TaskNinjaApp', [
    'ngAnimate',
    'ngResource',    
    'ngRoute',    
    'firebase',
	  'toastr',
	  'angularMoment'
  ])
  .constant('FURL', 'https://tutormvp.firebaseio.com/')  
  .config(function ($routeProvider, toastrConfig  ) {
    $routeProvider      
      .when('/', {
        templateUrl: 'views/browse.html',
		controller: 'BrowseController'
      })
      .when('/browse/:taskId',{
        templateUrl: 'views/browse.html',
        controller: 'BrowseController'
      })
      .when('/register',{
        templateUrl: 'views/register.html',
		controller: 'AuthController'
      })
	.when('/login',{
        templateUrl: 'views/login.html',
		controller: 'AuthController'
      })
      .otherwise({
        redirectTo: '/'
      });
	  angular.extend(toastrConfig, {
    allowHtml: false,
    autoDismiss: false,
    closeButton: false,
    closeHtml: '<button>&times;</button>',
    containerId: 'toast-container',
    extendedTimeOut: 1000,
    iconClasses: {
      error: 'toast-error',
      info: 'toast-info',
      success: 'toast-success',
      warning: 'toast-warning'
    },
		  progressBar: true,
		   timeOut: 5000,
		  positionClass: 'toast-top-left',
		  //toast-top-left
		  //toast-bottom-full-width
		  //toast-top-center
	  
	  })
	 
  });

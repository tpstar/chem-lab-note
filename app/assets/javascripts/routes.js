(function(){
	'use strict';

	angular
		.module('chemApp')
		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('reactions', {
						url: "/",
						templateUrl: "reactions/index.html",
						controller: 'ReactionsController as vm'
					});

				$urlRouterProvider.otherwise("/");

		}])
}())

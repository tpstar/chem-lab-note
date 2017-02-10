(function(){
	'use strict';

	angular
		.module('chemApp')
		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$stateProvider
					.state('reactions', {
						url: "/",
						templateUrl: "reactions/reactions.list.html",
						controller: 'ReactionsController as vm'
					})
					.state('reactions.detail', {
						url: "/reactions/:reactionId",
						templateUrl: 'reactions/reactions.detail.html'
						controller: 'ReactionsController as vm'
					});

				$urlRouterProvider.otherwise("/");

		}])
}())

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
					.state('reactions.new', {
						url: 'reactions/new',
						templateUrl: 'reactions/reactions.new.html',
						controller: 'ReactionsController as vm'
					})
					.state('reactions.detail', {
						url: "reactions/:reactionId",
						templateUrl: 'reactions/reactions.detail.html',
						controller: 'ReactionsController as vm'
					})
					.state('reactions.detail.edit', {
						url: "reactions/:reactionId/edit",
						templateUrl: 'reactions/reactions.edit.html',
						controller: 'ReactionsController as vm'
					});

				$urlRouterProvider.otherwise("/");

		}])
}())

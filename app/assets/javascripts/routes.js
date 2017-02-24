(function(){
	'use strict';

	angular
		.module('chemApp')
		.config(['$stateProvider', '$urlRouterProvider',
			function($stateProvider, $urlRouterProvider) {
				$stateProvider
				.state('home', {
					url: '/home',
					templateUrl: 'home/_home.html',
					controller: 'HomeController as vm'
					})
					.state('reactions', {
						url: "/reactions",
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
					})
					.state('login', {
						url: '/login',
						templateUrl: 'auth/_login.html',
						controller: 'AuthCtrl',
						onEnter: ['$state', 'Auth', function($state, Auth) {
							Auth.currentUser().then(function(){
								$state.go('home');
							})
						}]
					})
					.state('register', {
						url: '/register',
						templateUrl: 'auth/_register.html',
						controller: 'AuthCtrl',
						onEnter: ['$state', 'Auth', function($state, Auth) {
							Auth.currentUser().then(function(user){
								console.log(user);
								$state.go('home');
							}), function(error) {
								console.log(error)
							}
						}]
					});

				$urlRouterProvider.otherwise('home');

		}])
}())

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
						templateUrl: "reactions/reactions.html",
						controller: 'ReactionsController as vm'
					})
					.state('reactions.list', {
						url: "/list",
						templateUrl: "reactions/reactions.list.html",
						controller: 'ReactionsController as vm'
					})
					.state('reactions.new', {
						url: '/new',
						templateUrl: 'reactions/reactions.new.html',
						controller: 'ReactionsController as vm'
					})
					.state('reactions.detail', {
						url: "/:reactionId",
						templateUrl: 'reactions/reactions.detail.html',
						controller: 'ReactionsController as vm'
					})
					.state('reactions.detail.edit', {
						url: "/:reactionId/edit",
						templateUrl: 'reactions/reactions.edit.html',
						controller: 'ReactionsController as vm'
					})
					.state('chemicals', {
						url: "/chemicals",
						templateUrl: "chemicals/chemicals.html",
						controller: 'ChemicalsController as vm'
					})
					.state('chemicals.list', {
						url: "/list",
						templateUrl: "chemicals/chemicals.list.html",
						controller: 'ChemicalsController as vm'
					})
					.state('chemicals.new', {
						url: '/new',
						templateUrl: 'chemicals/chemicals.new.html',
						controller: 'ChemicalsController as vm'
					})
					.state('chemicals.detail', {
						url: "/:chemicalId",
						templateUrl: 'chemicals/chemicals.detail.html',
						controller: 'ChemicalsController as vm'
					})
					.state('chemicals.detail.edit', {
						url: "/:chemicalId/edit",
						templateUrl: 'chemicals/chemicals.edit.html',
						controller: 'ChemicalsController as vm'
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

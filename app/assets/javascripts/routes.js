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
					})
					.state('home.register', {
						url: '/register',
						templateUrl: 'auth/_register.html',
						controller: 'AuthCtrl',
					})
					.state('home.login', {
						url: '/login',
						templateUrl: 'auth/_login.html',
						controller: 'AuthCtrl',
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
						controller: 'ReactionsController as vm',
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
					.state('chemicals.edit', {
						url: "/:chemicalId/edit",
						templateUrl: 'chemicals/chemicals.edit.html',
						controller: 'ChemicalsController as vm'
					})
				$urlRouterProvider
					.when('/login', 'home/login')
					.otherwise('home/register');
			}])
}())

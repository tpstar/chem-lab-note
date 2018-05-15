(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('HomeController', ['$scope', 'Auth',
			function($scope, Auth) {
      var vm = this;

			$scope.register = function(){
				Auth.register($scope.user)
					.then(() => $state.go('home'))
			}

    }])

}())

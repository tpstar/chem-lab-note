(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('HomeController', ['$scope', '$state', 'Auth',
			function($scope, $state, Auth) {
      var vm = this;

			$scope.register = function(){
				Auth.register($scope.user)
					.then(() => $state.go('reactions.new'))
			}

    }])

}())

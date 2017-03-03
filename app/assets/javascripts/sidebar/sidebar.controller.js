angular.module('chemApp')
  .controller('SidebarCtrl', ['$scope', 'Auth',
		function($scope, Auth) {

		Auth.currentUser()
			.then(function(user) {
				$scope.user = user;
			})
	}])

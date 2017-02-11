(function(){
	'use strict';

	angular
		.module('chemApp')
    .factory('ReactionService', ['$http', function($http) {
      return {
        all,
				getDetail
      }

      function all() {
        return $http.get('/api/reactions')
          .then(response => response.data)
          .catch(err => console.log(err))
      }
			function getDetail(reactionId) {
				return $http.get(`/api/reactions/${reactionId}`)
					.then(response => response.data)
					.catch(err => console.log(err))
			}
    }]);
}())

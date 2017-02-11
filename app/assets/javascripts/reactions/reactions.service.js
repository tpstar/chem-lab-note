(function(){
	'use strict';

	angular
		.module('chemApp')
    .factory('ReactionService', ['$http', function($http) {
      return {
        all,
				getDetail,
				create
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

			function create(reactionInfo) {
				console.log(reactionInfo);
				const req = {
					method: 'POST',
					url: '/api/reactions',
					headers: {
						'Content-Type': 'application/json'
					},
					data: { reaction: reactionInfo }
				}
				return $http(req)
					.then(response => response.data)
					.catch(err => console.log(err))
			}
    }]);
}())

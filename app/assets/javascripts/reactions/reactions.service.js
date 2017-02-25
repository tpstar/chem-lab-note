(function(){
	'use strict';

	angular
		.module('chemApp')
    .factory('ReactionService', ['$http', function($http) {
      return {
        all,
				getDetail,
				create,
				update,
				destroy
      }

      function all() {
        return $http.get('/api/reactions')
          .then(response => response.data)
          .catch(err => console.log("Please login or signup first."))
      }

			function getDetail(reactionId) {
				return $http.get(`/api/reactions/${reactionId}`)
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function create(reactionInfo) {
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

			function update(reactionInfo) {
				// console.log(reactionInfo) //updated data carries here
				// return $http.put(`/api/reactions/${reactionInfo.id}`,
				// 	{ reaction: reactionInfo })
				// 	.then(response => console.log(response.data))
				const req = {
					method: 'PUT',
					url: `/api/reactions/${reactionInfo.id}`,
					headers: {
						'Content-Type': 'application/json'
					},
					data: { reaction: reactionInfo }
				}
				return $http(req)
					// .then(console.log(req))
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function destroy(reactionId) {
				const req = {
					method: 'DELETE',
					url: `/api/reactions/${reactionId}`,
				}
				return $http(req)
					.then(response => console.log(response.data.message))
					.catch(err => console.log(err))
			}

    }]);
}())

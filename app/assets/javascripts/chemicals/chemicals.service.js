(function(){
	'use strict';

	angular
		.module('chemApp')
    .factory('ChemicalService', ['$http', function($http) {
      return {
        all,
				getDetail,
				create,
				update,
				destroy
      }

      function all() {
        return $http.get('/api/chemicals')
          .then(response => response)
          .catch(error => error)
      }

			function getDetail(chemicalId) {
				return $http.get(`/api/chemicals/${chemicalId}`)
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function create(chemicalInfo) {
				const req = {
					method: 'POST',
					url: '/api/chemicals',
					headers: {
						'Content-Type': 'application/json'
					},
					data: { chemical: chemicalInfo }
				}
				return $http(req)
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function update(chemicalInfo) {
				console.log(chemicalInfo) //updated data carries here
				// return $http.put(`/api/chemicals/${chemicalInfo.id}`,
				// 	{ chemical: chemicalInfo })
				// 	.then(response => console.log(response.data))
				const req = {
					method: 'PUT',
					url: `/api/chemicals/${chemicalInfo.id}`,
					headers: {
						'Content-Type': 'application/json'
					},
					data: { chemical: chemicalInfo }
				}
				return $http(req)
					// .then(console.log(req))
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function destroy(chemicalId) {
				const req = {
					method: 'DELETE',
					url: `/api/chemicals/${chemicalId}`,
				}
				return $http(req)
					.then(response => console.log(response.data.message))
					.catch(err => console.log(err))
			}

    }]);
}())

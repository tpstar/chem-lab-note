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

			function getDetail(chemcalId) {
				return $http.get(`/api/chemicals/${chemcalId}`)
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function create(chemcalInfo) {
				const req = {
					method: 'POST',
					url: '/api/chemicals',
					headers: {
						'Content-Type': 'application/json'
					},
					data: { chemcal: chemcalInfo }
				}
				return $http(req)
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function update(chemcalInfo) {
				// console.log(chemcalInfo) //updated data carries here
				// return $http.put(`/api/chemicals/${chemcalInfo.id}`,
				// 	{ chemcal: chemcalInfo })
				// 	.then(response => console.log(response.data))
				const req = {
					method: 'PUT',
					url: `/api/chemicals/${chemcalInfo.id}`,
					headers: {
						'Content-Type': 'application/json'
					},
					data: { chemcal: chemcalInfo }
				}
				return $http(req)
					// .then(console.log(req))
					.then(response => response.data)
					.catch(err => console.log(err))
			}

			function destroy(chemcalId) {
				const req = {
					method: 'DELETE',
					url: `/api/chemicals/${chemcalId}`,
				}
				return $http(req)
					.then(response => console.log(response.data.message))
					.catch(err => console.log(err))
			}

    }]);
}())

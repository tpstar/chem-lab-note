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
				destroy,
				addEq,
				weightToMol,
				addProductWt,
				calculateYield
      }

      function all() {
        return $http.get('/api/reactions')
          .then(response => response)
          .catch(error => error)
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
				console.log(req)
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

			function calculateMol(g, fw) {
				return (g/fw).toFixed(2)
			}

			function calculateMolFromEq(molOne, eqTwo, eqOne) {
				return (molOne*eqTwo/eqOne).toFixed(2)
			}

			function calculateWt(mol, fw) {
				return (mol*fw).toFixed(1)
			}

			function calculateEq(molPr, molOne, eqOne) {
				return (molPr*eqOne/molOne).toFixed(2)
			}

			function calculateYield(eqOne, eqTwo, eqPr) {
				if (eqOne >= eqTwo) {
					return ((eqPr/eqTwo)*100).toFixed(1)
				} else {
					return (eqPr/eqOne.toFixed(3)*100).toFixed(1)
				}
			}

			function weightToMol (reactant_1, reactant_2, product, quant_1, quant_2, quant_pr) {
				if (reactant_1) { //Check if Reactant-1 properties are present
					quant_1.mol = calculateMol(quant_1.g, reactant_1.fw); //calculate mole of Reactant-1
					if (reactant_2 && (quant_2.eq))	{ // when Reactant-2 properties and eq are present
						// console.log(quant_2);
						addEq(reactant_1, reactant_2, product, quant_1, quant_2, quant_pr)
						if (quant_pr.eq) { //Check if Product eq is present
							addProductWt(reactant_1, reactant_2, product, quant_1, quant_2, quant_pr)
						}
					}
				} else {
					alert("Please choose Reactant-1 first!")
				}
			}


			function addEq(reactant_1, reactant_2, product, quant_1, quant_2, quant_pr) {
				if (reactant_2) { //Check if Reactant-2 is present
					if (quant_1.mol) { //Check if Reactant-1 and its weight are added
						quant_2.mol = calculateMolFromEq(quant_1.mol, quant_2.eq, quant_1.eq)
						console.log(quant_2.mol);

						quant_2.g = calculateWt(quant_2.mol, reactant_2.fw)
						console.log(quant_2.g);
					} else {
						alert("Please check if Reactant-1 is chosen and it weight is added!")
					}
				} else {
					alert("Please choose Reactant-2 first!")
				}
			}

			function addProductWt(reactant_1, reactant_2, product, quant_1, quant_2, quant_pr) {
				if (product) { // Check is Product is present
					if (quant_1.mol && quant_2.eq) {
						quant_pr.mol = calculateMol(quant_pr.g, product.fw); //calculate mole
						// console.log(quant_pr.mol);

						quant_pr.eq = calculateEq(quant_pr.mol, quant_1.mol, quant_1.eq);
						console.log(quant_pr.eq);

						// rxn_yield = calculateYield(quant_1.eq, quant_2.eq, quant_pr.eq)
					} else {
						alert("Please choose Product first!")
					}
				}
			}
    }]);
}())

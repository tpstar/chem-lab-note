(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('reactionChemical', ['ChemicalService', function(ChemicalService) {

			return{

				templateUrl: 'reactions/reactions_chemical.html',

				compile: function(){
						return {
								post: function(scope, iElement, iAttributes, controller){
									if(iAttributes.chem === "reactant-1"){
										console.log(scope);
										// iElement.on('click', scope.btnClick);
									}

								}

						}
				},

				controller: function($scope, $element, $attrs){

						$scope.searchChemical = function(qChemical){
								console.log("qChemical is" + qChemical);
								ChemicalService
									.search(qChemical)
									.then(function(data) {
										console.log(data);
										// vm.chemical = data;
										})
						}

				}
			}

		}])

}())

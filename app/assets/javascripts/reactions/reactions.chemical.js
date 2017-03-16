(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('reactionChemical', ['ChemicalService', '$interpolate', function(ChemicalService, $interpolate) {

			return{

				templateUrl: 'reactions/reactions_chemical.html',
				scope: true,

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

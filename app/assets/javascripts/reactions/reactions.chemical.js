(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('reactionsChemical', ['ChemicalService', 'ReactionService', function(ChemicalService, ReactionService) {

			return{
				transclude: true,
				templateUrl: 'reactions/reactions_chemical.html',
				scope: {
					type: '@',
					chemical: '='
				},
				link: function(scope, element, attribute){
					if(attribute.type === "Reactant-1"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.chemical.search)
								.then(function(data) {
									scope.$parent.vm.reaction.chemicals[0] = data;
									scope.$parent.vm.reaction.quantities[0].chemical_id = data.id;
								})
						} //search chemical
					} //if(attribute.type)
					if(attribute.type === "Reactant-2"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.chemical.search)
								.then(function(data) {
									scope.$parent.vm.reaction.chemicals[1] = data;
									scope.$parent.vm.reaction.quantities[1].chemical_id = data.id;
								})
							}
						} //if
						if(attribute.type === "Solvent"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.chemical.search)
									.then(function(data) {
										scope.$parent.vm.reaction.chemicals[2] = data;
										scope.$parent.vm.reaction.quantities[2].chemical_id = data.id;
									})
							}
						} //if
						if(attribute.type === "Product"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.chemical.search)
									.then(function(data) {
										scope.$parent.vm.reaction.chemicals[3] = data;
										scope.$parent.vm.reaction.quantities[3].chemical_id = data.id;
									})
							}
						} //if

						scope.yield = function() {
							if(scope.$parent.vm.reaction.quantities[1].eq && scope.$parent.vm.reaction.quantities[3].eq) {
								return ReactionService.calculateYield(scope.$parent.vm.reaction.quantities[0].eq, scope.$parent.vm.reaction.quantities[1].eq, scope.$parent.vm.reaction.quantities[3].eq);
							}
						}

						scope.weightToMol = function () {  //In reactant-1 panel, convert weight to mol
							ReactionService.weightToMol(scope.$parent.vm.reaction.chemicals[0], scope.$parent.vm.reaction.chemicals[1], scope.$parent.vm.reaction.chemicals[3],
																		scope.$parent.vm.reaction.quantities[0], scope.$parent.vm.reaction.quantities[1], scope.$parent.vm.reaction.quantities[3])
							scope.$parent.vm.reaction.yield = scope.yield();
						}

						scope.addEq = function () {
							ReactionService.addEq(scope.$parent.vm.reaction.chemicals[0], scope.$parent.vm.reaction.chemicals[1], scope.$parent.vm.reaction.chemicals[3],
																		scope.$parent.vm.reaction.quantities[0], scope.$parent.vm.reaction.quantities[1], scope.$parent.vm.reaction.quantities[3]);
							scope.$parent.vm.reaction.yield = scope.yield();
						}

						scope.addProductWt = function() {
							ReactionService.addProductWt(scope.$parent.vm.reaction.chemicals[0], scope.$parent.vm.reaction.chemicals[1], scope.$parent.vm.reaction.chemicals[3],
																		scope.$parent.vm.reaction.quantities[0], scope.$parent.vm.reaction.quantities[1], scope.$parent.vm.reaction.quantities[3])
							scope.$parent.vm.reaction.yield = scope.yield();
						}

 					} //link
				}
			}])

}())

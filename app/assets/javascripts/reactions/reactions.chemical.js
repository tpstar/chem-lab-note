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
					ngModel: '='
				},
				link: function(scope, element, attribute){
					if(attribute.type === "Reactant-1"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel.search)
								.then(function(data) {
									scope.$parent.vm.reaction.chemicals[0] = data;
									scope.$parent.vm.reaction.chemicals[0].chemical_id = data.id;
								})
						} //search chemical
					} //if(attribute.type)
					if(attribute.type === "Reactant-2"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel.search)
								.then(function(data) {
									scope.$parent.vm.reaction.chemicals[1] = data;
									scope.$parent.vm.reaction.chemicals[1].chemical_id = data.id;
								})
							}
						} //if
						if(attribute.type === "Solvent"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.ngModel.search)
									.then(function(data) {
										scope.$parent.vm.reaction.chemicals[2] = data;
										scope.$parent.vm.reaction.chemicals[2].chemical_id = data.id;
									})
							}
						} //if
						if(attribute.type === "Product"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.ngModel.search)
									.then(function(data) {
										scope.$parent.vm.reaction.chemicals[3] = data;
										scope.$parent.vm.reaction.chemicals[3].chemical_id = data.id;
									})
							}
						} //if

						scope.weightToMol = function () {  //In reactant-1 panel, convert weight to mol
							ReactionService.weightToMol(scope.$parent.vm.reaction.chemicals[0], scope.$parent.vm.reaction.chemicals[1], scope.$parent.vm.reaction.chemicals[3],
																		scope.$parent.vm.reaction.quantities[0], scope.$parent.vm.reaction.quantities[1], scope.$parent.vm.reaction.quantities[3])
						}

						scope.addEq = function () {
							ReactionService.addEq(scope.$parent.vm.reaction.chemicals[0], scope.$parent.vm.reaction.chemicals[1], scope.$parent.vm.reaction.chemicals[3],
																		scope.$parent.vm.reaction.quantities[0], scope.$parent.vm.reaction.quantities[1], scope.$parent.vm.reaction.quantities[3])
						}

						scope.addProductWt = function() {
							ReactionService.addProductWt(scope.$parent.vm.reaction.chemicals[0], scope.$parent.vm.reaction.chemicals[1], scope.$parent.vm.reaction.chemicals[3],
																		scope.$parent.vm.reaction.quantities[0], scope.$parent.vm.reaction.quantities[1], scope.$parent.vm.reaction.quantities[3],
																		scope.$parent.vm.reaction.yield)
						}
 					} //link
				}
			}])

}())

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
								})
						} //search chemical
					} //if(attribute.type)
					if(attribute.type === "Reactant-2"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel.search)
								.then(function(data) {
									scope.$parent.vm.reaction.chemicals[1] = data;
								})
							}
						} //if
						if(attribute.type === "Solvent"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.ngModel.search)
									.then(function(data) {
										scope.$parent.vm.reaction.chemicals[2] = data;
									})
							}
						} //if
						if(attribute.type === "Product"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.ngModel.search)
									.then(function(data) {
										scope.$parent.vm.reaction.chemicals[3] = data;
									})
							}
						} //if

						scope.weightToMol = function () {
							scope.$parent.vm.reaction.reaction_chemicals[0].mol = ReactionService
								.calculateMol(scope.$parent.vm.reaction.reaction_chemicals[0].wt, scope.$parent.vm.reaction.chemicals[0].fw); //calculate mole
						}

						scope.addEq = function () {
							scope.$parent.vm.reaction.reaction_chemicals[1].mol = ReactionService
								.calculateMolFromEq(scope.$parent.vm.reaction.reaction_chemicals[0].mol, scope.$parent.vm.reaction.reaction_chemicals[1].eq, scope.$parent.vm.reaction.reaction_chemicals[0].eq)
							console.log(scope.$parent.vm.reaction.reaction_chemicals[1].mol);

							scope.$parent.vm.reaction.reaction_chemicals[1].wt = ReactionService
								.calculateWt(scope.$parent.vm.reaction.reaction_chemicals[1].mol, scope.$parent.vm.reaction.chemicals[1].fw)
							console.log(scope.$parent.vm.reaction.reaction_chemicals[1].wt);
						}

						scope.addProductWt = function() {
							scope.$parent.vm.reaction.reaction_chemicals[3].mol = ReactionService
								.calculateMol(scope.$parent.vm.reaction.reaction_chemicals[3].wt, scope.$parent.vm.reaction.chemicals[3].fw); //calculate mole
							console.log(scope.$parent.vm.reaction.reaction_chemicals[3].mol);

							scope.$parent.vm.reaction.reaction_chemicals[3].eq = ReactionService
								.calculateEq(scope.$parent.vm.reaction.reaction_chemicals[3].mol, scope.$parent.vm.reaction.reaction_chemicals[0].mol, scope.$parent.vm.reaction.reaction_chemicals[0].eq);
							console.log(scope.$parent.vm.reaction.reaction_chemicals[3].eq);

							scope.$parent.vm.reaction.yield = ReactionService
								.calculateYield(scope.$parent.vm.reaction.reaction_chemicals[0].eq, scope.$parent.vm.reaction.reaction_chemicals[1].eq, scope.$parent.vm.reaction.reaction_chemicals[3].eq);
							console.log(scope.$parent.vm.reaction.yield)


						}
 					} //link
				}
			}])

}())

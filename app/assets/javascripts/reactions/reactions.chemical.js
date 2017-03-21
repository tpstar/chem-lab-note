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
							console.log(scope.ngModel.search)
							ChemicalService
								.search(scope.ngModel.search)
								.then(function(data) {
									scope.$parent.reactantOne = data;
									console.log(scope.$parent.reactantOne);
								})
						} //search chemical
					} //if(attribute.type)
					if(attribute.type === "Reactant-2"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel)
								.then(function(data) {
									scope.$parent.reactantTwo = data;
									console.log(scope.$parent.reactantTwo);
								})
							}
						} //if
						if(attribute.type === "Product"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.ngModel)
									.then(function(data) {
										scope.$parent.product = data;
										console.log(scope.$parent.product);
									})
							}
						} //if
						scope.addR1Wt = function () {
							scope.$parent.rxnChemOne.wt = scope.ngModel.reactantOneWt;
							scope.$parent.rxnChemOne.mol = ReactionService
								.calculateMol(scope.$parent.rxnChemOne.wt, scope.$parent.reactantOne.fw);
						}
					} //link
				}
			}])

}())

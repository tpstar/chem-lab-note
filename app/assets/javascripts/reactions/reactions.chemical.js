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
									scope.$parent.reactantOne.properties = data;
								})
						} //search chemical
					} //if(attribute.type)
					if(attribute.type === "Reactant-2"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel.search)
								.then(function(data) {
									scope.$parent.reactantTwo.properties = data;
								})
							}
						} //if
						if(attribute.type === "Product"){
							scope.searchChemical = function (){
								ChemicalService
									.search(scope.ngModel.search)
									.then(function(data) {
										scope.$parent.product.properties = data;
									})
							}
						} //if

						scope.addR1Wt = function () {
							scope.$parent.reactantOne.rxnAttr.mol = ReactionService
								.calculateMol(scope.$parent.reactantOne.rxnAttr.wt, scope.$parent.reactantOne.properties.fw); //calculate mole
						}

						scope.addR2Eq = function () {
							scope.$parent.reactantTwo.rxnAttr.mol = ReactionService
								.calculateMolFromEq(scope.$parent.reactantOne.rxnAttr.mol, scope.$parent.reactantTwo.rxnAttr.eq, scope.$parent.reactantOne.rxnAttr.eq)
							console.log(scope.$parent.reactantTwo.rxnAttr.mol);

							scope.$parent.reactantTwo.rxnAttr.wt = ReactionService
								.calculateWt(scope.$parent.reactantTwo.rxnAttr.mol, scope.$parent.reactantTwo.properties.fw)
							console.log(scope.$parent.reactantTwo.rxnAttr.wt);
						}

						scope.addPrWt = function() {
							scope.$parent.product.rxnAttr.mol = ReactionService
								.calculateMol(scope.$parent.product.rxnAttr.wt, scope.$parent.product.properties.fw); //calculate mole
							console.log(scope.$parent.product.rxnAttr.mol);

							scope.$parent.product.rxnAttr.eq = ReactionService
								.calculateEq(scope.$parent.product.rxnAttr.mol, scope.$parent.reactantOne.rxnAttr.mol, scope.$parent.reactantOne.rxnAttr.eq);
							console.log(scope.$parent.product.rxnAttr.eq);

							scope.$parent.yield = ReactionService
								.calculateYield(scope.$parent.reactantOne.rxnAttr.eq, scope.$parent.reactantTwo.rxnAttr.eq, scope.$parent.product.rxnAttr.eq);
							console.log(scope.$parent.yield)
						}
 					} //link
				}
			}])

}())

(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('reactionsChemical', ['ChemicalService', function(ChemicalService) {

			return{
				transclude: true,
				templateUrl: 'reactions/reactions_chemical.html',
				scope: {
					ngModel: '=',
					type: '@'
				},
				link: function(scope, element, attribute){
					if(attribute.type === "Reactant-1"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel)
								.then(function(data) {
									scope.$parent.reactantOne = data;
									console.log(scope.$parent.reactantOne);
								})
						}
					} //if
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
					} //link
				}
			}])

}())

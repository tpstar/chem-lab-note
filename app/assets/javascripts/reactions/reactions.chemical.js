(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('reactionsChemical', ['ChemicalService', function(ChemicalService) {

			return{
				transclude: true,
				templateUrl: 'reactions/reactions_chemical.html',
				scope: {
					ngModel: '='
				},
				link: function(scope, element, attribute){
					if(attribute.type === "reactant-1"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel)
								.then(function(data) {
									scope.$parent.reactantOne = data;
									console.log(scope.$parent.reactantOne);
								})
						}
					} //if
					if(attribute.type === "reactant-2"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel)
								.then(function(data) {
									scope.$parent.reactantTwo = data;
									console.log(scope.$parent.reactantTwo);
								})
							}
						} //if
					} //link
				}
			}])

}())

(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('reactionChemical', ['ChemicalService', '$interpolate', function(ChemicalService, $interpolate) {

			return{
				templateUrl: 'reactions/reactions_chemical.html',
				scope: {
					ngModel: '='
				},
				link: function(scope, iElement, iAttributes, controller){
					if(iAttributes.chem === "reactant-1"){
						scope.searchChemical = function (){
							ChemicalService
								.search(scope.ngModel)
								.then(function(data) {
									scope.$parent.vm.reactantNo1 = data;
									console.log(scope);
									console.log(scope.$parent.vm.reactantNo1);
								})
							}
						} //if
					} //link
				}
			}])

}())

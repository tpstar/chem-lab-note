(function(){
	'use strict';

	angular
		.module('chemApp')
    .directive('rxnChemical', ['ReactionService', function(ReactionService) {
      return {
				templateUrl: 'reactions/reactions_chemical.html',
				controller: function($scope){
				},
				controllerAs: 'ctrl',
				link: function(scope, element, attr, ctrl) {
					function searchChemical(qChemical) {
						console.log("click led me to searchChemical");
						ReactionService
							.search("zoro")
							.then(function(data) {
								console.log(data);
								// vm.chemical = data;
							})
					}
				}
					// ChemicalService.all()
					// 	.then(function(response) {
					// 			$scope.chemicals = response.data;
					// 	})
					// var currentReactions = $scope.$parent.reactions.filter(reaction => reaction.id !== vm.reaction.id)
			}

		}])

}())

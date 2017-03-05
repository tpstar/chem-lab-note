(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('ChemicalsController', ['ChemicalService', '$stateParams', '$scope', '$state',
			function(ChemicalService, $stateParams, $scope, $state) {
      var vm = this;

			vm.createChemical = createChemical;
			vm.updateChemical = updateChemical;
			vm.deleteChemical = deleteChemical;

      ChemicalService.all()
        .then(function(response) {
					console.log(response);
					if (response.status === 201) {
						$scope.chemicals = response.data;
					} else if (response.status === 406) {
						$scope.errorMessage = "Please login or sign up first!"
					}

				})

			if ($stateParams.chemicalId) {
				ChemicalService
					.getDetail($stateParams.chemicalId)
					.then(function(data) {
						vm.chemical = data;
					})
			}

			function createChemical() {
				ChemicalService
					.create(vm.chemical)
					.then(chemical => $scope.$parent.chemicals.push(chemical)) // for display
								// $state.go('chemicals.detail'))
					.then(vm.chemical = {})
			}

			function updateChemical(chemicalInfo) {
				ChemicalService
					.update(chemicalInfo)
					.then(function(data) {
						// console.log(data)
						$scope.$parent.vm.chemical = data
						//bind vm.chemical in parent chemical.detail to edited chemical data
					})
			}

			function deleteChemical() {
				ChemicalService
					.destroy(vm.chemical.id)
					.then(function(){
						var currentReactions = $scope.$parent.chemicals.filter(chemical => chemical.id !== vm.chemical.id)
						$scope.$parent.chemicals = currentReactions;
						$state.go('chemicals')
					})
			}
    }])
}())

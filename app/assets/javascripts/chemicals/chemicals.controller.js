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
			vm.uploadEditChem = uploadEditChem;

      ChemicalService.all()
        .then(function(response) {
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
					.then(function(chemical) {
						$scope.$parent.chemicals.push(chemical); // for display
						$state.go('chemicals.detail', {'chemicalId': chemical.id});
					})
			}

			function updateChemical(chemicalInfo) {
				ChemicalService
					.update(chemicalInfo)
					.then(function(chemical) {
						$state.go('chemicals.detail', {'chemicalId': chemical.id});
						// console.log(data)
						// $scope.$parent.vm.chemical = data
						//bind vm.chemical in parent chemical.detail to edited chemical data
					})
			}

			function deleteChemical() {
				ChemicalService
					.destroy(vm.chemical.id)
					.then(function(){
						var currentReactions = $scope.$parent.chemicals.filter(chemical => chemical.id !== vm.chemical.id)
						$scope.$parent.chemicals = currentReactions;
						$state.go('chemicals.list')
					})
			}

			function uploadEditChem(id) {
				console.log(id);
				$state.go('chemicals.edit', {'chemicalId': id} )
			}

    }])
}())

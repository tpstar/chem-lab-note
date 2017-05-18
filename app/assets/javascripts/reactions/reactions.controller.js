(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('ReactionsController', ['ReactionService', '$stateParams', '$scope', '$state', '$filter',
			function(ReactionService, $stateParams, $scope, $state, $filter) {
      var vm = this;

			vm.createReaction = createReaction;
			vm.updateReaction = updateReaction;
			vm.deleteReaction = deleteReaction;
			vm.editReaction   = editReaction;
			vm.reactionDetail = reactionDetail;

			vm.searchByDate = searchByDate;
			vm.clearDate = clearDate;
			vm.clearTitle = clearTitle;


			vm.reaction = {chemicals: [], quantities: [{eq: 1}, {}, {}, {}]}

			vm.dataReadOnly = false;

      ReactionService.all()
        .then(function(response) {
					// console.log(response);
					if (response.status === 201) {
						$scope.reactions = response.data;
					} else if (response.status === 406) {
						$scope.errorMessage = "Please login or sign up first!"
					}
				})

			if ($stateParams.reactionId) {
				ReactionService
					.getDetail($stateParams.reactionId)
					.then(function(data) {
						vm.reaction = data;
					})
			}

			if ($state.current.name === 'reactions.detail') {
				vm.dataReadOnly = true;
				// console.log(vm.dataReadOnly);
			} else {
				vm.dataReadOnly = false;
				// console.log(vm.dataReadOnly);
			}

			function createReaction() {
				if (vm.reaction.title) {
					ReactionService
						.create(vm.reaction)
						.then(function(reaction) {
							$scope.$parent.reactions.push(reaction); // for display
							$scope.$parent.vm.dataReadOnly = false;
							$state.go('reactions.detail', {'reactionId': reaction.id});
						})
				} else {
					alert("Please add title!")
				}

			}

			function editReaction() {
				vm.dataReadOnly = false;
			}

			function reactionDetail() {
				vm.dataReadOnly = true;
			}reactionDetail

			function updateReaction(reactionInfo) {
				ReactionService
					.update(reactionInfo)
					.then(function(data) {
						// console.log(data)
						$scope.$parent.vm.reaction = data
						//bind vm.reaction in parent reaction.detail to edited reaction data
						reactionDetail();
					})
			}

			function deleteReaction() {
				ReactionService
					.destroy(vm.reaction.id)
					.then(function(){
						var currentReactions = $scope.$parent.reactions.filter(reaction => reaction.id !== vm.reaction.id)
						$scope.$parent.reactions = currentReactions;
						$state.go('reactions.list')
					})
			}


			function searchByDate(val) {
				var filteredReactionBoolean = $filter('reactionDateFilter')(val, $scope.startDate, $scope.endDate);
				return filteredReactionBoolean;
			}

			function clearTitle() {
				delete $scope.searchTitle
			}

			function clearDate() {
				delete $scope.startDate;
				delete $scope.endDate;
			}


    }])
}())

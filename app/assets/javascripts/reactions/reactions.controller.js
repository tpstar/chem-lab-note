(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('ReactionsController', ['ReactionService', '$stateParams', '$scope', '$state',
			function(ReactionService, $stateParams, $scope, $state) {
      var vm = this;

			vm.createReaction = createReaction;
			vm.updateReaction = updateReaction;
			vm.deleteReaction = deleteReaction;

			vm.reaction = {chemicals: [], quantities: [{eq: 1}, {}, {}, {}]}



			vm.dataReadOnly = true;

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

			function createReaction() {

				ReactionService
					.create(vm.reaction)
					// .then(reaction => $scope.reactions.push(reaction)) // for display in ng

					.then(function(reaction) {
						$scope.$parent.reactions.push(reaction); // for display
						$state.go('reactions.detail', {'reactionId': reaction.id});
					})
			}

			function updateReaction(reactionInfo) {
				ReactionService
					.update(reactionInfo)
					.then(function(data) {
						// console.log(data)
						$scope.$parent.vm.reaction = data
						//bind vm.reaction in parent reaction.detail to edited reaction data
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

    }])
}())

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

      ReactionService.all()
        .then(data => $scope.reactions = data);

			if ($stateParams.reactionId) {
				ReactionService
					.getDetail($stateParams.reactionId)
					.then(function(data) {
						data.date = Date(data.date)
						console.log(data);
						vm.reaction = data;
						// vm.reaction = Date(vm.reaction.date);
					})
			}

			function createReaction() {
				ReactionService
					.create(vm.reaction)
					.then(reaction => $scope.$parent.reactions.push(reaction))
					.then(vm.reaction = {})
			}

			function updateReaction() {
				// vm.reaction.date = Date(vm.reaction.date);
				console.log(vm.reaction);
				ReactionService
					.update(vm.reaction)
			}

			function deleteReaction() {
				ReactionService
					.destroy(vm.reaction.id)
					.then(function(){
						var currentReactions = $scope.$parent.reactions.filter(reaction => reaction.id !== vm.reaction.id)
						$scope.$parent.reactions = currentReactions;
						$state.go('reactions')
					})
			}
    }])
}())

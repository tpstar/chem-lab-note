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
						vm.reaction = data;
					})
			}

			function createReaction() {
				ReactionService
					.create(vm.reaction)
					.then(reaction => $scope.$parent.reactions.push(reaction)) // for display
					.then(vm.reaction = {})
			}

			function updateReaction(reactionInfo) {
				ReactionService
					.update(reactionInfo)
					.then(function(data) {
						console.log(data)
						$scope.$parent.vm.reaction = data
						// var tempReactions = $scope.$parent.reactions.filter(reaction => reaction.id !== data.id)
						// tempReactions.push(data);
						// console.log(tempReactions);
						// console.log($scope.$parent.reactions);
						// $scope.$parent.reactions = tempReactions;
						// console.log($scope.$parent.reactions); //$scope.$parent.reactions change but not the details view
					})
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

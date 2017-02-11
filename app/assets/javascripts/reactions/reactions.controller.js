(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('ReactionsController', ['ReactionService', '$stateParams', function(ReactionService, $stateParams) {
      var vm = this;

			vm.createReaction = createReaction;

      ReactionService.all()
        .then(data => vm.reactions = data);
				
			if ($stateParams.reactionId) {
				ReactionService
					.getDetail($stateParams.reactionId)
					.then(function(data) {
						vm.reaction = data;
					})
			}

			function createReaction() {
				console.log(vm.reaction);
				ReactionService
					.create(vm.reaction)
					.then(reaction => vm.reactions.push(reaction))
			}
    }])
}())

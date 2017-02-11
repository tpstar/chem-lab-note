(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('ReactionsController', ['ReactionService', '$stateParams', function(ReactionService, $stateParams) {
      var vm = this;
			console.log($stateParams);
			
      ReactionService.all()
        .then(data => vm.reactions = data);
			if ($stateParams.reactionId) {
				ReactionService
					.getDetail($stateParams.reactionId)
					.then(function(data) {
						vm.reaction = data;
						console.log(vm.reaction.title)
					})
			}
    }])
}())

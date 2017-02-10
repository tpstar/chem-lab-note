(function(){
	'use strict';

	angular
		.module('chemApp')
    .controller('ReactionsController', ['ReactionService', function(ReactionService) {
      var vm = this;

      ReactionService.all()
        .then(data => vm.reactions = data);
    }])
}())

(function(){
	'use strict';

	angular
		.module('chemApp')
    .filter('reactionDateAfter', function() {
      return function(reactions, date) {

        function parseDate(input) {
          if (input != null) {
            var parts = input.split('-');
            return new Date(parts[0], parts[1]-1, parts[2]);
          }
        }

        var searchDate = parseDate(date);
        var filteredReactions  = [];
        for (var i = 0; i < reactions.length; i++) {
          if (searchDate === parseDate(reactions[i].date)) {
            filteredReactions.push(reactions[i]);
          }
        }
        return (searchDate.getTime() == parseDate(reactions[0].date).getTime());
      }

		})

}())

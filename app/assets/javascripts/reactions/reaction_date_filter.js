(function(){
	'use strict';

	angular
		.module('chemApp')
    .filter('reactionDateFilter', function() {
      return function(reaction, startDate, endDate) {
				if (startDate && endDate) {
	        function parseDate(input) {
	          if (input != null) {
	            var parts = input.split('-');
	            return new Date(parts[0], parts[1]-1, parts[2]);
	          }
	        }
	        var fromDate = parseDate(startDate).getTime();
					var toDate = parseDate(endDate).getTime();
					var reactionDate = parseDate(reaction.date).getTime();
	        return (reactionDate >= fromDate && reactionDate <= toDate);
				} else {
					return true;
				}//if (startDate && endDate)
			}
		})

}())

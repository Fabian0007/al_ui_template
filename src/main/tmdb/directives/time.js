
define( [ 'angular', 'tmdb/partials/time/TimeController'], 
    function(angular, TimeController) {
        "use strict";

        return function() {
            return {
                transclude: true,
                replace: true,
                controller: TimeController,
                templateUrl: '/tmdb/partials/time/time.html',
                restrict: 'E',
                scope: {
                    details: '=ngModel'
                }
            };
        };
    }
);
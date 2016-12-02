define(['angular',
        'ngRoute',
        'config/config',
        'tmdb/services/TMDBAPIService'
    ],
    function(angular, $routeParams, config, TMDBAPIService) {
        "use strict";

        var TimeController = function($scope, TMDBAPIService, $routeParams) {
            console.log($scope.datemovie);
            $scope.$watch('runtime', function(){
                    
                    if (parseInt($scope.runtime) > 120) {
                        $scope.longmovie = "LARGE";
                    }
                    else {
                        $scope.longmovie = "SHORT";
                    }
                    
                    var arr = $scope.datemovie.split("-");
                    $scope.year = arr[0];
                    
            });
            
            
 

    
        };

        TimeController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];
        return TimeController;
    }
);
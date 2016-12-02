define(['angular',
        'ngRoute',
        'config/config',
        'tmdb/services/TMDBAPIService'
    ],
    function(angular, $routeParams, config, TMDBAPIService) {
        "use strict";

        var TimeController = function($scope, TMDBAPIService, $routeParams) {
            console.log($scope.details.runtime);

            if (parseInt($scope.details.runtime) > 120) {
                console.log("Entro1");
                $scope.longmovie = "LARGE";
            }
            else {
                 console.log("Entro2");
                 $scope.longmovie = "SHORT";
            }
           // var arr = $scope.datemovie.split("-");
            //$scope.year = arr[0];
 

    
        };

        TimeController.$inject = ['$scope', 'TMDBAPIService', '$routeParams'];
        return TimeController;
    }
);
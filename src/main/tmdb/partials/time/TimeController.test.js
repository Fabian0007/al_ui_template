define( [ 'tmdb/partials/time/TimeController'], 
  function(TimeController ) {
    "use strict";
    describe("the tmdbapiservice", function () {
      var tmdbapiservice, timecontroller, scope;

      beforeEach(function () {
        /**
        * Load the required modules
        */
        module("ngResource")
        module("ngRoute");
        module("app");

        /**
        * Injection
        */
        inject(["$rootScope", "$controller", "$routeParams", "TMDBAPIService", function ($rootScope, $controller, _$routeParams, _tmdbapiservice) {
          tmdbapiservice = _tmdbapiservice;
          
          scope = $rootScope.$new();
          
          timecontroller = $controller(TimeController, {$scope: scope, TMDBAPIService: tmdbapiservice, $routeParams: _$routeParams})
          
        }]);
      });
      
        it("should return SHORT when  runtime is lower than 120 minutes", function() {
            scope.runtime = 0;
            scope.$apply();
            expect(scope.longmovie).toBe("SHORT");
        });
        
        it("should return LARGE when  runtime is greater than 121 minutes", function() {
            scope.runtime = 121;
            scope.$apply();
            expect(scope.longmovie).toBe("LARGE");
        });
    
    });
    

    
  }
);
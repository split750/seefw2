angular.module("SuezEfWApp").directive('nwPageNav', function(){
  return {
    replace: true,
    restrict: "E",
    templateUrl: "javascripts/directives/nwPageNav.html",
    controller: function($scope, $location){
      $scope.isPage = function(name){
        return new RegExp("/" + name + "($|/)").test($location.path());
      };
    }
  };
});
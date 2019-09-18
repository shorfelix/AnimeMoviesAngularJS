var SuperCtrl = angular.module("SuperCtrl",[])
            
SuperCtrl.controller("ListCtrl",ListCtrl);
function ListCtrl($scope){
    $scope.movies = movies;
}
SuperCtrl.controller("DetailCtrl",DetailCtrl)
function DetailCtrl($scope,$routeParams){

    $scope.movies =movies
    $scope.movieId=$routeParams.movieId;
    console.log($routeParams.movieId);
}
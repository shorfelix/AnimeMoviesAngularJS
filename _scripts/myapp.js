var myApp = angular.module("myApp",['ngRoute','SuperCtrl'])

myApp.config(RouteConnect)


function RouteConnect($routeProvider){

$routeProvider.when("/list",{
    templateUrl:"./../list.html",
    controller:"ListCtrl"}).when("/detail/:movieId",{
        templateUrl:"./../detail.html",
        controller:"DetailCtrl"
    }).otherwise({
        redirectTo:"/list"
    })


}
   

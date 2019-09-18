var myApp = angular.module("myApp",['ngRoute','SuperCtrl'])

myApp.config(RouteConnect)


function RouteConnect($routeProvider){

$routeProvider.when("/list",{
    templateUrl:"_html/list.html",
    controller:"ListCtrl"}).when("/detail/:movieId",{
        templateUrl:"_html/detail.html",
        controller:"DetailCtrl"
    })
    .otherwise({
       
        redirectTo:"/list"
    })

    console.log($routeProvider);
}
   

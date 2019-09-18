var SuperCtrl = angular.module("SuperCtrl",[])
            
SuperCtrl.controller("ListCtrl",ListCtrl);
function ListCtrl($scope){
    $scope.movies = [
        {
             name:"Ghost in the shell",
             rating:9,
             views:10000,
             image:"_images/ghostintheshell.jpeg"
            
         },
         {
             name:"Akira",
             rating:8,
             views:10000,
             image:"_images/akira.jpg"
            
         },
         {
             name:"Armatage",
             rating:6,
             views:10000,
             image:"_images/armatage.jpg"
            
         },
         {
             name:"Princess mononoke",
             rating:10,
             views:10000,
             image:"_images/princessmononoke.jpg"
            
         },
         {
             name:"Paprika",
             rating:9,
             views:10000,
             image:"_images/paprika.jpg"
            
         },
         {
             name:"Tokyo godfathers",
             rating:10,
             views:10000,
             image:"_images/tokyogodfathers.jpg"
            
         },
         {
             name:"Memories",
             rating:8,
             views:10000,
             image:"_images/memories.jpg"
            
         },
         {
             name:"The Animatrix",
             rating:9,
             views:10000,
             image:"_images/theanimatrix.jpg"
            
         }
     ];
}

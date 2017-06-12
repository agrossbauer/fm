var app = angular.module('ratingApp', ['ngRoute']);

var recipecounter=0;
			
app.controller('ratingController',['$scope',ratingController]);
		

function ratingController($scope,$http) {
	 
	$scope.hideme = false;
	
	$scope.recipe = {
	  
	
	 recipeCollection : [
	  {title: "Gericht1", img: "http://cdn.jamieoliver.com/recipe-database/xtra_med/51035095.jpg", rating: false},
	  {title: "Gericht2", img: "http://cdn.jamieoliver.com/recipe-database/xtra_med/52813664.jpg", rating: false}],
	 
	 
	  //title: $scope.recipe.recipeCollection[0].title,
	  title: "",
	  img: ""
	

	};	
	 
	$scope.recipe.title=$scope.recipe.recipeCollection[0].title;
	$scope.recipe.img=$scope.recipe.recipeCollection[0].img;
	
	$scope.btnOK = function() {
		if( recipecounter++<1)
		{
		$scope.recipe.title=$scope.recipe.recipeCollection[recipecounter].title;
		$scope.recipe.img=$scope.recipe.recipeCollection[recipecounter].img;
		$scope.recipe.recipeCollection[recipecounter].rating = true;
		}
		else{$scope.hideme = true;}
		
	};
	
	/*var url = "data.txt";

	    $http.get(url).then( function(response) {
	       $scope.students = response.data;
	    });*/
	
	
			
};
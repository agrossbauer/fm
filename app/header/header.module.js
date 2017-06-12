var app = angular.module('headerApp', ['ngRoute']);


			
app.controller('headerController',['$scope',headerController]);
		

function headerController($scope,$http) {
	 
	
	$scope.btnOK = function() {
		alert("hallo");
		
	};
	
	/*var url = "data.txt";

	    $http.get(url).then( function(response) {
	       $scope.students = response.data;
	    });*/
	
	
			
};
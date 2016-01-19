angular
	.module('todoListApp')
	.controller('mainCtrl', function($scope){
		$scope.helloword = function(){
			console.log("HELLO");
		}
	});
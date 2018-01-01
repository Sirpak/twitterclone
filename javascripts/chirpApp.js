var app = angular.module('chirpApp', []);

app.controller ('mainController', function($scope){
	 $scope.posts = []; //the scope that you are creating is only accessable to this controller 
	 $scope.newPost = {create_by: '', text: '', create_at: ''}

	$scope.post = function(){
		$scope.newPost.created_at = Date.now();
		$scope.posts.push($scope.newPost); // takes the populated post and pushes it into new.Post
		$scope.newPost = {created_by: '', text: '', created_at: ''}
	};

});	

app.controller ('authController', function($scope){
	$scope.user = {username:"", password:""};
	$scope.error_message = "";



	$scope.login = function(){
		// placeholder for auth
		$scope.error_message = 'login request for' +$scope.user.username;

	};

	$scope.register = function(){
		//placeholder for auth
		$scope.error_message= 'registration request for'+$scope.user.username;

	};
});
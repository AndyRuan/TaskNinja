
app.controller('AuthController',function($scope, $location, Auth){
	//console.log("authControl");

	
	
	
			   
	/*
	$scope.FBlog =function(){
		
		//console.log("12");
		//$location.path('/');
		console.log("login by FB");
		Auth.FBlog(function(){
			$location.path('/browse');
		})
		//console.log(Auth.signedIn());
		
	}
	*/
	
	$scope.register = function(user){
		Auth.register(user).then(function(){
			alert("register successfully!")
			$location.path('/');
		},function(err){
			console.log(err);
		});
	}
	
	$scope.login = function(user){
		Auth.login(user)
		.then(function(){
			console.log("Logging in successfully!");
			$location.path('/');
		},function(err){
			console.log("Error in log in");
		});
	}
	
	$scope.changePassword = function(user){
		Auth.changePassword(user)
		.then(function(){
			$scope.user.email = '';
			$scope.user.oldPass ='';
			$scope.user.newPass = '';
			console.log("Passowrd changed successfully!");
		},function(err){
			console.log("Error in change password");
		})
	};
});
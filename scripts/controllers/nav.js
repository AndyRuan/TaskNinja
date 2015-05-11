'user strict';

app.controller('NavController',function($scope, $location, Auth,toastr){
	
	
	
	
	$scope.FBlog =function(){
		
		//console.log("12");
		//$location.path('/');
		console.log("runing Auth.FBlog()");
		Auth.FBlog(function(){
			
			//$location.path('/browse.html')
			
			//console.log($location.path('/browse'))
			toastr.success('Log in successfully !',"");
			$location.path('#/')
			
		})
		//console.log("run facebook sign in API...")
		//console.log(Auth.signedIn());
		//$location.path('/')
	}
	
	
	$scope.currentUser = Auth.user;
	//console.log($scope.currentUser);
	$scope.signedIn = Auth.signedIn;
	
	$scope.logout = function(){
		Auth.logout();
		console.log("Logged out");
		toastr.info('Log off !', 'Thank you');
		// window.location.href = '#/' ;
		$location.path('#/')
	}
})
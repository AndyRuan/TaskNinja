'use strict';

app.factory('Auth', function(FURL,$firebaseAuth, $firebase){
	var ref = new Firebase(FURL);
	var auth = $firebaseAuth(ref);
	
	//ref.offAuth(function(){Auth.logout});
	//ref.onAuth(function(){
		// callback() })

	
	var Auth = {
		user:{
			name:"",
			pic:""
		},
		login : false,
		
		
		signedIn:function(){
			return Auth.login;
		},
		logout:function(){
			Auth.user = {}
			Auth.login = false;
			console.log(auth.$unauth());
			
		},
		
		
		
		
		FBlog : function(callback){
		
		 ref.authWithOAuthPopup ("facebook", function(error, authData) {
		//remember: "sessionOnly";
		scope: "email,user_likes";
  		if (error) {
    		console.log("Login Failed!", error);
			
  		} else {
    		//console.log(authData)
			//Auth.user = authData;
			Auth.login = true;
			Auth.user.name = authData.facebook.cachedUserProfile.name;
			Auth.user.pic = authData.facebook.cachedUserProfile.picture.data.url;
			
			callback()
			
		 }});
			
		
			//var profileRef = $firebase(ref.child('profile'));
			//return profileRef.$set(uid, profile);
  		
		 
		 
		
		
		}
		
	
		
		/*
		createprofile :function(uid,user){
		var profile={
		name: user.name,
		email:user.email,
		gravatar:get_gravatar(user.email, 40)
		};
		var profileRef = $firebase(ref.child('profile'));
		return profileRef.$set(uid, profile);
	
	
	
	
	},
		login: function(user){
			return auth.$authWithPassword(
				{email:user.email, password: user.password}
				);
		},
		register:function(user){
			return auth.$createUser({email: user.email, password: user.password})
			.then(function(){
				return Auth.login(user);

			})
			.then(function(data){
				return Auth.createprofile(data.uid,user);
			});
		},

		logout:function(){
			auth.$unauth();

		},

		changePassword: function(){
			return auth.$changePassword({email: user.email, oldPassword: user.oldpass, newPassword: user.newpass })

		},

		signedIn:function(){
			
			return !!Auth.user.provider; 

		},
		*/
		
		



	};
	
	//尝试登录时的反应
	ref.onAuth(function(authData){
		
			if (!!authData){
			Auth.login = true;
			Auth.user.name = authData.facebook.cachedUserProfile.name;
			Auth.user.pic = authData.facebook.cachedUserProfile.picture.data.url;
			Auth.user.provider = authData.provider;
			Auth.user.uid = authData.uid;
				var profileRef = $firebase(ref.child('profile'));
				console.log(authData)
				profileRef.$set(authData.uid,Auth.user);
			}
				console.log("Auth service onauth ")
				
			})

	return Auth;

});


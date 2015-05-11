'use strict';


app.controller('TaskController',function($scope, $location, Task,toastr,Auth){
	
	$scope.createTask=function(){
		$scope.task.status = 'open';
		$scope.task.gravatar = Auth.user.pic;
		$scope.task.name = Auth.user.name;
		$scope.task.poster = Auth.user.uid;
		
		Task.createTask($scope.task)
			.then(function(ref){
		toastr.success("发布成功！","")
		$scope.task = {title:'', description:'', total:'',status:'open',gravatar:'',name:'',poster:''};
			$location.path('/browse/' + ref.key());
		});
	};
	
	$scope.editTask=function(task){
		Task.editTask(task).then(function(){
			toastr.success("修改成功","")
		})
	};
	

});
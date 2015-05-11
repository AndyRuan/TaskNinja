app.controller('BrowseController',function($scope, $routeParams, toastr,Task, Auth){
	
	$scope.searchTask = '';
	$scope.tasks = Task.all;
	
	$scope.signedIn = Auth.signedIn;
	$scope.listMode = true;
	
	if ($routeParams.taskId){
		var task = Task.getTask($routeParams.taskId).$asObject();
		console.log(task.name)
		$scope.listMode = false;
		setSelectedTask(task);
		
		
	}
	
	function setSelectedTask(task){
		$scope.selcetedTask = task;
		
		if ($scope.signedIn()){
			alert("signein")
			$scope.isCreator = Task.isCreator;
			$scope.isOpen = Task.isOpen;
			
		}
	}
})
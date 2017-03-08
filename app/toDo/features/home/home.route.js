angular
	.module('toDoList.home')
	.config(homeConfig);

function homeConfig($stateProvider) {
	$stateProvider.state({
		name: 'home',
		url: '/home',
		templateUrl: 'toDo/features/home/home.html',
		controller: 'HomeCtrl',
		controllerAs: 'HomeVM'
	})
}
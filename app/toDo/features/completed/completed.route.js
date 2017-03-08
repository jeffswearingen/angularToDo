angular
	.module('toDo.completed')
	.config(completedConfig);

function completedConfig($stateProvider) {
	$stateProvider.state({
		name: 'completed',
		url: '/completed',
		templateUrl: '/toDo/features/completed/completed.html',
		controller: 'CompletedCtrl',
		controllerAs: 'CompletedVM'
	})
}
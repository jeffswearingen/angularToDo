angular
	.module('toDo.create')
	.config(createConfig);

function createConfig($stateProvider) {
	$stateProvider.state({
		name: 'create',
		url: '/create',
		templateUrl: '/toDo/features/create/create.html',
		controller: 'CreateCtrl',
		controllerAs: 'CreateVM'
	});
}
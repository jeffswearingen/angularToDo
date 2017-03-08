angular
	.module('toDo', [
		// Global Dependencies
		'ui.router',

		// Features
		'toDo.home',
		'toDo.create',
		'toDo.completed',
		'toDo.list'
	])
	.config(appConfig);

function appConfig($urlRouterProvider) {

	// If URL does not exist as a route, redirect to /
	$urlRouterProvider.otherwise('/');
}
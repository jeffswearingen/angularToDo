angular
	.module('toDoList', [
		// Global Dependencies
		'ui.router',

		// Features
		'toDoList.home',
		'toDoList.create',
		'toDoList.completed',
		'toDoList.list'
	])
	.config(appConfig);

function appConfig($urlRouterProvider) {

	// If URL does not exist as a route, redirect to /
	$urlRouterProvider.otherwise('/');
}
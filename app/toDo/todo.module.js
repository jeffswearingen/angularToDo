angular
	.module('toDo', [
		'ui.router',

		'toDo.home'
	])
	.config(appConfig);

function appConfig($urlRouterProvider) {
	$urlRouterProvider.otherwise('/');
}
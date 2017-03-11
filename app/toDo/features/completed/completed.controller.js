angular
	.module('toDoList.completed')
	.controller('CompletedCtrl', CompletedCtrl);

function CompletedCtrl($scope, $http) {
	var vm = this;

	vm.items = [];

	$http({
		method: 'GET',
		url: '/api/table'
	}).then(function(response) {
		console.log(response);
		response.data.forEach(function(element) {
			vm.items.push(element);
		});
	});
}
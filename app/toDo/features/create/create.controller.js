angular
	.module ('toDo.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl() {
	var vm = this;

	vm.createTodo = function(item) {
		console.log(item);
	};


}
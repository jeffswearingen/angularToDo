angular
	.module ('toDoList.create')
	.controller('CreateCtrl', CreateCtrl);

function CreateCtrl($scope, table) {
	var vm = this;

	vm.items = {
		toDoItem: '',
		dueDate: '',
	};

	resetView();

	function resetView() {
		vm.items = {
			toDoItem: '', 
			dueDate: ''
		}
	}

	vm.addItem = function(toDoItem, dueDate) {
		console.log('enter createToDo');
		vm.items.toDoItem = toDoItem;
		vm.items.dueDate = dueDate;
		console.log(vm.items);
		table.createItem(vm.items);
		resetView();

	};


}
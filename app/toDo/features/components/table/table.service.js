angular
	.module('toDoList.component.table')
	.service('table', TableService);

function TableService($http) {
	return {
		createItem: function(table) {
			$http({
				method: 'POST',
				url: '/api/table',
				data: table
			}).then(function(response) {
				if (err) throw err;
			})
		},
		getItem: function(table) {
			$http({
				method: 'GET',
				url: '/api/table'
			}).then(function(response) {
				response.data.forEach(function(element) {
					table.push(element);
				});
			});
		},
		updateItem: function(table) {
			$http({
				method: 'PUT',
				url: '/api/table',
				data: table
			}).then(function(err, response) {
				if(err) throw err;
			})
		}
	}
}
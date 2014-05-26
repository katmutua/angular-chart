angular.module('Builds', ['buildsChart']);

function BuildsGraphData($scope) {
	$scope.config = {
		title: 'Builds', 
		labels: false, 
		mouseover: function() {}, 
		mouseout: function() {},
		click: function() {}, 
		legend: {
			display: true, 
			position: 'right'
		}
	};

	$scope.data = {
		series: [''],
		data: [{
			x: 'Build #1', 
			y:[100, 500, 0]
		}, 
			x: 'Builds #2',
			y:[300, 100, 100]
		},
			x: 'Build #3',
			y:[351]
		},
			x: 'Build #4', 
			y: [54, 0, 879]
		}]
	};
}
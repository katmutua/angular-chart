angular.module('BuildsGraph', ['BuildsGraph']);

function GraphData($scope) {
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Build Per Week');
    data.addColumn('number', 'Success Rate (%)');
    data.addRows([
        ['Wk 1', 70],
        ['Wk 2', 68],
        ['Wk 3', 90],
        ['Wk 4', 74],
        ['Wk 5', 89],
        ['Wk 6', 67],
        ['Wk 7', 100]
    ]);

    var options = {
        'title': 'Statistical Graph',
        'width': 640,
        'height': 480,
        'is3D': true
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}

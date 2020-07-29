var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
	type: 'bar',
	data: false,

	options: {
		scales: {
			yAxes: [{
				ticks: {
					beginAtZero: true
				}
			}]
		}
	},
	animation: {
		duration: 5000
	}
});

$.ajax({
	type: "POST",
	url: "chart.php",
	dataType: "json",
	success: function (data) {

		console.log(data);
		
		myChart.data = data;
        myChart.update({
            duration: 2000,
            easing: 'linear'
        });
	},
	error: function (request, status, error) {
		alert(request.responseText);
	}
});

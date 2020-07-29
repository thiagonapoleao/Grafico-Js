$('document').ready(function () {

	$.ajax({
		type: "POST",
		url: "chart.php",
		dataType: "json",
		success: function (data) {

            // for (var i in data) {
            	console.log(data)
            // }
            var horas = [];
            var dif = [];
            var upm = [];
            var erros = [];
            var metas = [];

            for (var i = 0; i < data.length; i++) {

            	horas.push(data[i].horasG);
            	dif.push(data[i].horasD);
            	upm.push(data[i].upm);
            	erros.push(data[i].difErros);
            	metas.push(data[i].meta);

            }

            grafico(horas,dif,upm,erros,metas);

        }
    });

})

function grafico(horas,dif,upm,erros,metas) {	


	var ctx = document.getElementById('myChart').getContext('2d');
	Chart.plugins.register({
		afterDraw: function(chartInstance) {
			if (chartInstance.config.options.showDatapoints) {
				var helpers = Chart.helpers;
				var ctx = chartInstance.chart.ctx;
				var fontColor = helpers.getValueOrDefault(chartInstance.config.options.showDatapoints.fontColor, chartInstance.config.options.defaultFontColor);

      // render the value of the chart above the bar
      ctx.font = Chart.helpers.fontString(Chart.defaults.global.defaultFontSize, 'normal', Chart.defaults.global.defaultFontFamily);
      ctx.textAlign = 'center';
      ctx.textBaseline = 'bottom';
      ctx.fillStyle = fontColor;

      chartInstance.data.datasets.forEach(function (dataset) {
      	for (var i = 0; i < dataset.data.length; i++) {
      		var model = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._model;
      		var scaleMax = dataset._meta[Object.keys(dataset._meta)[0]].data[i]._yScale.maxHeight;
      		var yPos = (scaleMax - model.y) / scaleMax >= 0.93 ? model.y + 20 : model.y - 5;    
      		ctx.fillText(dataset.data[i], model.x, yPos);
      	}
      });
  }
}
});
	
	var mixedChart = new Chart(ctx, {

		type: 'bar',
		data: {  
			datasets: [{
				label: 'UPM',
				value: upm,
				backgroundColor: 'rgb(34,139,34)',
				borderColor: 'rgb(34,139,34)',				
				data: upm
			},{
				label: 'Erros',
				value: erros,
				backgroundColor: 'rgb(255,0,0)',
				borderColor: 'rgb(255,0,0)',
				data: erros
			},{
				label: 'Meta', 				
				backgroundColor: 'rgba(255,250,250, 0.3)',
				borderColor: 'rgb(139,0,0)',
				data: metas,
				type: 'line'
			}],
			labels: horas             
		},


		options: {
			showDatapoints: true,
			scales: {
				xAxes: [{
					ticks: {
						beginAtZero: true
					}
				}]
			},

		},

	});


}

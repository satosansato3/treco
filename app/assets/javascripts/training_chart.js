/* global $ */
/* global Chart */
/* global gon */
/* global moment */

function chart_data(data_array, category) {
  let data = [];
  $.each(data_array, function(index,value){
    data.push({x: value["date"], y: value[category]});
  });
  return data;
}

document.addEventListener("turbolinks:load", function() {
  let date = new Date();
  let y = date.getFullYear();
  let m = date.getMonth();
  let firstDay = new Date(y, m, 1);
  let lastDay = new Date(y, m + 1, 0);
  var swim_ctx = document.getElementById("swimChart").getContext('2d');
  var swimChart = new Chart(swim_ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: "スイム",
              data: chart_data(gon.swim, "swim"),
              backgroundColor: '#66CCFF',
              borderColor: '#66CCFF',
              fill: false,
              lineTension: 0
            }]},
      options: {
        scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                    day: 'M/D'
                }
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
      }
  });
  
  var bike_ctx = document.getElementById("bikeChart").getContext('2d');
  var bikeChart = new Chart(bike_ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: "バイク",
              data: chart_data(gon.bike, "bike"),
              backgroundColor: '#66CC33',
              borderColor: '#66CC33',
              fill: false,
              lineTension: 0
            }]},
      options: {
        scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                    day: 'M/D'
                }
              },
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]            
        }
      }
  });
  
  var run_ctx = document.getElementById("runChart").getContext('2d');
  var runChart = new Chart(run_ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: "ラン",
              data: chart_data(gon.run, "run"),
              backgroundColor: '#ff6347',
              borderColor: '#ff6347',
              fill: false,
              lineTension: 0
            }]},
      options: {
        scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                    day: 'M/D'
                }
              }
            }],
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]            
        }
      }
});
})
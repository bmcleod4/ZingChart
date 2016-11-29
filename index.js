require('./client/zingchart.min.js');
zingchart.MODULESDIR = "https://cdn.zingchart.com/2.5.0/modules/";
module.exports = zingchart;

var chartData = {
  
  // Specify your chart type here
  // Try replacing 'bar' with 'line'.
  type: 'bar',
  
  title: {
    text : 'Ross Bay Monument Analysis'
  }, 
  
  legend : {    
  },
  
  // Insert your data here
  series: [
    {
      text: 'Number of Monuments',
      values: [15]
    },
    {
      text: 'Individuals',
      values:[23]
    },
    {
      text: 'Male',
      values:[16]
    },
    {
      text: 'Female',
      values:[7]
    },
    {
      text: 'Age at Death; Male',
      values: [83, 78, 87, 76, 61, 70, 82, 69, 49, 39, 75, 83, 60, 78, 56]
    },
    {
      text: 'Age at Death; Female',
      values: [63, 95, 69, 47, 56]
    },
  ]
};

// Render the chart!
zingchart.render({
  id: 'chartDiv',
  data: chartData,
  height: 400,
  width: '100%'
});

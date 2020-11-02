<template>
  <div>
    <LineChart
      :chartData="{
          labels: ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
              datasets: [{ 
              data: [415.16,421.08,436.76,441.07,448.24,451.53,450.19,439.73,439.45,409.74,428.52,442.39,425.41,423.69,436.48,437.43,403.20,398.36,413.85,399.44,415.16,421.08,436.76,441.07,448.24,451.53,450.19,439.73,439.45,409.74,428.52,442.39,425.41,423.69,436.48,437.43,403.20,398.36,413.85,399.44],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: true
            },{ 
              data: [0.06,0.14,0.20,0.33,2.65,3.63,4.09,4.73,5.70,7.12,8.26,9.20,12.02,15.92,21.22,31.42,38.39,52.33,62.92,85.12,104.09,132.86,170.73,220.65,276.05,346.51,440.62,530.85,635.77,706.47,831.57,963.77,1140.97,1270.16,1429.62],
              label: 'Eolien',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.9)',
              fill: '-1'
            },{ 
              data: [66.36,74.27,60.40,58.94,59.56,51.48,56.30,57.60,63.65,56.99,62.71,44.79,58.67,70.72,62.83,54.44,60.04,49.22,63.93,58.52,66.36,74.27,60.40,58.94,59.56,51.48,56.30,57.60,63.65,56.99,62.71,44.79,58.67,70.72,62.83,54.44,60.04,49.22,63.93,58.52],
              label: 'Hydroélectrique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [11.51,15.15,18.37,19.37,21.05,23.07,21.76,21.99,21.88,20.50,23.76,29.49,22.76,18.40,13.15,21.14,34.98,40.44,30.52,38.38,11.51,15.15,18.37,19.37,21.05,23.07,21.76,21.99,21.88,20.50,23.76,29.49,22.76,18.40,13.15,21.14,34.98,40.44,30.52,38.38],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [0.05,0.13,0.27,0.39,0.60,0.96,2.18,4.07,5.69,7.91,9.95,12.05,14.91,16.03,17.25,21.25,21.40,24.32,28.08,34.48,0.05,0.13,0.27,0.39,0.60,0.96,2.18,4.07,5.69,7.91,9.95,12.05,14.91,16.03,17.25,21.25,21.40,24.32,28.08,34.48],
              label: 'Photovoltaïque',
              borderColor: '#FAB795',
              backgroundColor: 'rgb(250, 183, 149, 0.9)',
              fill: '-1'
            },{ 
              data: [2.99,3.33,3.54,3.72,3.78,3.87,3.84,4.22,4.44,4.58,4.92,5.48,5.39,5.39,5.82,6.45,7.64,7.99,8.52,8.70,2.99,3.33,3.54,3.72,3.78,3.87,3.84,4.22,4.44,4.58,4.92,5.48,5.39,5.39,5.82,6.45,7.64,7.99,8.52,8.70],
              label: 'Autres renouvelables',
              borderColor: '#F6661E',
              backgroundColor: 'rgb(246, 102, 30, 0.9)',
              fill: '-1'
            },{ 
              data: [10.03,8.44,8.35,9.40,8.64,10.35,9.81,9.03,8.02,6.52,8.00,9.53,9.47,8.39,8.55,8.87,8.54,9.51,8.69,8.43,10.03,8.44,8.35,9.40,8.64,10.35,9.81,9.03,8.02,6.52,8.00,9.53,9.47,8.39,8.55,8.87,8.54,9.51,8.69,8.43],
              label: 'Pétrole',
              borderColor: '#2E303E',
              backgroundColor: 'rgb(46, 48, 62, 0.9)',
              fill: '-1'
            },{ 
              data: [27.00,20.48,23.66,26.26,24.37,27.52,22.89,24.45,23.06,21.67,23.36,17.81,21.45,23.83,11.24,11.87,10.34,12.64,8.77,4.09,27.00,20.48,23.66,26.26,24.37,27.52,22.89,24.45,23.06,21.67,23.36,17.81,21.45,23.83,11.24,11.87,10.34,12.64,8.77,4.09],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Production d\'électricité par source','(TWh par année, France, BP & Ember, 2000-2019)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        elements: {
          point: { radius: 0, hitRadius: 5, hoverRadius: 5 }
        },
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear',
            ticks:{
                display: true,
                autoSkip: true,
                maxTicksLimit: 15
            }
          }],
          yAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: `terrawatt-heure`,
            },
            ticks:{
                max: 800,
            }
          }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' TWh';
                }
            }

        }
      }"
    />
    <details>
      <p><strong>Source:</strong> compilation de <a rel="noopener noreferrer" target="_blank" href="https://ourworldindata.org/grapher/electricity-production-by-source?time=earliest..latest">OurWorldInData</a>
      , à partir des sources 
      <a rel="noopener noreferrer" target="_blank" href="https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html">
        BP Statistical Review of World Energy
      </a> et <a rel="noopener noreferrer" target="_blank" href="https://ember-climate.org/data/">
        Ember Climate
      </a>.</p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'électricité produite (exprimée en terrawatt-heure) par source d'énergie (ayant une part significative) en France, par année entre 2000 et 2019. Les données sont rangées par ordre croissant de haut en bas.
      </p>
    </details>
  </div>
</template>

<script>
import LineChart from "../../LineChart.js";

export default {
  components: {
    LineChart,
  },
};
</script>
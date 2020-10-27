<template>
  <div>
    <LineChart
      :chartData="{
          labels: ['1965','1966','1967','1968','1969','1970','1971','1972','1973','1974','1975','1976','1977','1978','1979','1980','1981','1982','1983','1984','1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
          datasets: [{ 
              data: [18.62,20.29,21.25,22.9,26.03,29.64,32.46,34.38,37.13,37.93,39.39,41.29,43.69,46.66,48.83,49.26,49.6,49.99,52.31,55.99,58.84,61.37,64.83,69.56,73.28,76.23,79.74,83.42,87.84,92.69,97.01,101.51,104.62,104.39,108.6,112.55,116.18,122.11,132.27,145.04,156.51,165.75,176.08,180.88,184.99,196.8,207.33,214.02,220.6,225.15,228.63,233.13,240.07,249.35,257.56],
              label: 'Asie et Pacifique',
              borderColor: '#1EB980',
              backgroundColor: 'rgb(30, 185, 128, 0.9)',
              fill: true
            },{ 
              data: [58.41,61.73,63.92,67.87,71.59,74.28,75.94,80.09,83.66,82.22,80.45,84.9,87.48,88.24,89.7,87.35,85.4,82.21,81.8,86.24,86.55,86.9,89.84,93.75,95.96,96.18,96.26,97.82,99.8,102.06,104.06,107.47,108.34,109,111.07,113.81,111.18,113.1,113.5,115.84,116.42,115.69,117.52,115.22,109.76,113.29,113.35,110.86,113.72,114.78,113.83,113.74,114.34,117.79,116.58],
              label: 'Amérique du nord',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [44.48,45.82,47.17,50.33,53.99,57.5,59.05,61.87,65.43,64.53,63.88,67.51,68.64,71.27,73.93,72.08,70.21,68.89,69.52,71.32,85.29,86.73,88.49,89.41,89.08,89.93,88.63,86.02,84.31,82.51,84.12,86.44,86.01,86.85,86.46,87.47,88.5,88.12,89.7,91,91.43,92.23,91.37,90.92,85.55,88.69,86.66,86.32,85.43,82.1,82.77,83.9,84.76,84.76,83.82],
              label: 'Europe',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [2.02,2.1,2.2,2.32,2.44,2.58,2.73,2.97,3.25,3.46,3.46,3.91,4.45,4.66,5.47,5.3,5.77,6.39,6.99,7.9,8.4,8.77,9.39,9.97,10.51,10.86,11.34,12.37,12.74,14.22,14.71,15.19,15.91,16.17,16.46,17.29,18.13,19.13,19.97,21.52,23,24.17,25.54,27.38,28.22,29.74,30.86,32.12,33.06,34.05,35.04,36.23,36.83,37.61,38.78],
              label: 'Moyen-Orient',
              borderColor: '#07DA8C',
              backgroundColor: 'rgb(7, 218, 140, 0.9)',
              fill: '-1'
            },{ 
              data: [4.8,5.08,5.29,5.61,5.86,6.24,6.58,7.12,7.82,8.22,8.33,8.89,9.42,9.95,10.58,11.07,11.05,11.15,11.23,11.71,12.05,12.83,13.32,13.75,13.99,14.04,14.42,15.1,15.68,16.59,17.32,18.07,19,19.7,19.64,20.17,20.17,20.38,20.59,21.65,22.36,23.52,24.42,25.17,24.82,26.16,27.26,27.93,28.53,28.76,28.8,28.5,28.61,28.53,28.61],
              label: 'Amérique latine',
              borderColor: '#F6661E',
              backgroundColor: 'rgb(246, 102, 30, 0.9)',
              fill: '-1'
            },{ 
              data: [2.51,2.64,2.66,2.81,2.88,3.14,3.41,3.62,3.91,4.1,4.34,4.76,5,5.19,5.69,6.11,6.81,7.27,7.46,7.71,8.01,8.2,8.45,9.06,9.09,9.39,9.38,9.54,9.57,9.85,10.25,10.53,10.73,10.9,11.23,11.49,11.94,12.08,12.65,13.55,13.65,13.89,14.38,15.3,15.57,16.07,16.13,16.69,17.14,17.66,17.91,18.38,18.79,19.39,19.87],
              label: 'Afrique ',
              borderColor: '#FAB28E',
              backgroundColor: 'rgb(250, 178, 142, 0.9)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Consommation d\'énergie par continent','(TWh par année, monde, BP, 1965-2019)'],
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
                labelString: `terrawatt heure`,
            },
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
      <p><strong>Source:</strong> compilation de <a rel="noopener noreferrer" target="_blank" href="https://ourworldindata.org/">OurWorldInData</a>, à partir de données
      <a rel="noopener noreferrer" target="_blank" href="https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html">
        BP Statistical Review of World Energy
      </a>.</p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'énergie consommée (exprimée en térrawatt-heure) par continent, entre 1965 et 2019. Les données sont rangées par ordre croissant de haut en bas.
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
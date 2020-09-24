<template>
  <div>
    <LineChart
      :chartData="{
          labels: [1990,1995, 2000, 2005, 2010, 2015],
          datasets: [{ 
              data: [4429511,4992432,5994499,7321697,8666205,9553496],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: true
            }, { 
              data: [1750266,2020269,2759718,3704141,4838767,5576260],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [2191675,2545965,2695854,3019502,3530272,3989825],
              label: 'Hydraulique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [2012902,2331951,2590624,2767952,2756288,2570170],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: '-1'
            },{ 
              data: [1324817,1235827,1206768,1135309,977326,975906],
              label: 'Pétrole',
              borderColor: '#2E303E',
              backgroundColor: 'rgb(46, 48, 62, 0.9)',
              fill: '-1'
            },{ 
              data: [3880,7959,31348,103922,341384,838314],
              label: 'Eolien',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.9)',
              fill: '-1'
            },{ 
              data: [105479,95247,114407,170875,280559,417802],
              label: 'Biocarburants',
              borderColor: '#F6661E',
              backgroundColor: 'rgb(246, 102, 30, 0.9)',
              fill: '-1'
            },{ 
              data: [91,197,994,3929,32222,250574],
              label: 'Photovoltaïque',
              borderColor: '#FAB795',
              backgroundColor: 'rgb(250, 183, 149, 0.9)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Production d\'électricité par source','(GWh par année, monde, IEA, 1990-2017)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          yAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: `gigawatt heure`,
            },
          }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' GWh';
                }
            }

        }
      }"
    />
    <details>
      <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.iea.org/data-and-statistics">
        International Energy Agency
      </a>. Energy topic: Energy supply. Indicator: Electricity generation by source. Country or region: World. </p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'électricité produite (exprimée en gigawatt-heure) par source d'énergie (ayant une part significative) dans le monde, par année entre 1990 et 2017. Les données sont rangées par ordre croissant de haut en bas.
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
<template>
  <div>
    <LineChart
      :chartData="{
          labels: [1990,1995, 2000, 2005, 2010, 2015],
          datasets: [{ 
              data: [314081,377231,415162,451529,428521,437428],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: true
            },{ 
              data: [57418,76192,71133,56332,67526,60403],
              label: 'Hydroélectrique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [3027,3840,11514,23069,23758,21136],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [35423,26556,30860,30705,26315,14536],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: '-1'
            },{ 
              data: [0,5,48,962,9945,21319],
              label: 'Eolien',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.9)',
              fill: '-1'
            },{ 
              data: [0,1,5,11,620,7750],
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
          text: ['Production d\'électricité par source','(GWh par année, France, IEA, 1990-2018)'],
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
                    return tooltipItems.value + ' GWh';
                }
            }

        }
      }"
    />
    <details>
      <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.iea.org/data-and-statistics">
        International Energy Agency
      </a>. Energy topic: Energy supply. Indicator: Electricity generation by source. Country or region: France. </p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'électricité produite (exprimée en gigawatt heure) par source d'énergie (ayant une part significative) en France, par année entre 1990 et 2017. Les données sont rangées par ordre croissant de haut en bas.
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
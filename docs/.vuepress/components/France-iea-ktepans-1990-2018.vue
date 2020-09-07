<template>
  <div>
    <LineChart
      :chartData="{
          labels: [1990,1995, 2000, 2005, 2010, 2015],
          datasets: [{ 
              data: [81837,98291,108174,117650,111655,113976],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: true
            },{ 
              data: [84030,81367,82221,88227,77021,74790],
              label: 'Pétrole',
              borderColor: '#2E303E',
              backgroundColor: 'rgb(46, 48, 62, 0.9)',
              fill: true
            },{ 
              data: [26032,29577,35766,41025,42618,35040],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [20054,15897,14886,14155,11962,9327],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: '-1'
            },{ 
              data: [4632,6287,5706,4426,5392,4768],
              label: 'Hydroélectrique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [178,201,195,339,1188,3005],
              label: 'Eolien et solaire',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.9)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Production d\'énergie par source','(kT équivalent pétrole par année, France, IEA, 1990-2018)'],
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
      }"
    />
    <details>
      <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.iea.org/data-and-statistics">
        International Energy Agency
      </a>. Energy topic: Energy supply. Indicator: Total primary energy supply (TPES) by source. Country or region: France. </p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'énergie produite (exprimée en kilotonnes équivalent pétrole) par source d'énergie (ayant une part significative) en France, par année entre 1990 et 2017. Les données sont rangées par ordre croissant de haut en bas.
      </p>
    </details>
  </div>
</template>

<script>
import LineChart from "./LineChart.js";

export default {
  components: {
    LineChart,
  },
};
</script>
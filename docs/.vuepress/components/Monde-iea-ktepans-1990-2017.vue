<template>
  <div>
    <LineChart
      :chartData="{
          labels: [1990,1995, 2000, 2005, 2010, 2015],
          datasets: [{ 
              data: [3232737,3373475,3662674,3998702,4135577,4329220],
              label: 'Pétrole',
              borderColor: '#2E303E',
              backgroundColor: 'rgb(46, 48, 62, 0.9)',
              fill: true
            },{ 
              data: [2220466,2207265,2316665,2994438,3653106,3852538],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: '-1'
            }, { 
              data: [1663608,1807791,2072291,2360513,2733095,2949909],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [902367,965111,1011986,1081526,1202118,1286064],
              label: 'Biocarburants et déchets',
              borderColor: '#F6661E',
              backgroundColor: 'rgb(246, 102, 30, 0.9)',
              fill: '-1'
            }, { 
              data: [525520,608098,675467,721706,718830,670298],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: '-1'
            }, { 
              data: [184102,212816,224693,252352,296065,335519],
              label: 'Hydraulique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            }, { 
              data: [36560,42380,60054,70017,110075,204190],
              label: 'Eolien et solaire',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.8)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Production d\'énergie par source','(kT équivalent pétrole par année, monde, IEA, 1990-2017)'],
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
                labelString: `kilotonnes équivalent pétrole`,
            },
          }]
        },
      }"
    />
    <details>
      <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.iea.org/data-and-statistics">
        International Energy Agency
      </a>. Energy topic: Energy supply. Indicator: Total primary energy supply (TPES) by source. Country or region: World. </p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'énergie produite (exprimée en kilotonnes équivalent pétrole) par source d'énergie (ayant une part significative) dans le monde, par année entre 1990 et 2017. Les données sont rangées par ordre croissant de haut en bas.
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
<template>
  <div>
    <BarChart
      :chartData="{
        labels: [
          'Nucléaire',
          'Gaz', 
          'Biocarburants et déchets', 
          'Eolien et solaire',
          'Hydraulique',
          'Charbon', 
          'Pétrole',
          ],
        datasets: [
          {
            barThickness: 25,
            backgroundColor:  [
              '#29D398', // nucléaire
              '#E95678', // gaz
              '#F6661E', // biocarbutants et déchets
              '#EE64AE', // éolien
              '#59E3E3', // hydraulique
              '#6C6F93', // charbon
              '#2E303E', // pétrole
              ],
            data: [
              21959, // nucléaire
              12460, // gaz
              6924, // biocarbutants et déchets
              3401, // éolien
              '-335', // hydraulique
              '-10163', // charbon 
              '-11462', // pétrole
            ]
          },
        ],
      }"
      :options="{
        title: {
          display: true,
          text: ['Evolution de la production d\'énergie par source','(ktep, France, IEA, 1990 vs 2017)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: `kilotonnes équivalent pétrole`,
              },
              ticks: {
                beginAtZero: true,
              }
            },
          ],
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return tooltipItems.yLabel + ' ktep';
                }
            }

        }
      }"
    />
    <details>
    <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.iea.org/data-and-statistics">
    International Energy Agency</a>. Energy topic: Energy supply. Indicator: Total primary energy supply (TPES) by source. Country or region: France.</p>
    <p><strong>Description:</strong> 
      graphique en barres représentant l'évolution de la production d'énergie (exprimée en kilotonnes équivalent pétrole) par source d'énergie, entre 1990 et 2017 en France. Les données sont rangées par ordre décroissant de gauche à droite. 
    </p>
    </details>
  </div>
</template>

<script>
import BarChart from "../../BarChart.js";

export default {
  components: {
    BarChart,
  },
};
</script>
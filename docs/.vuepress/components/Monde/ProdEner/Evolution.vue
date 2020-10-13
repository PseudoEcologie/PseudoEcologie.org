<template>
  <div>
    <BarChart
      :chartData="{
        labels: [
          'Charbon', 
          'Gaz', 
          'Pétrole',
          'Biocarburants et déchets', 
          'Eolien et solaire',
          'Hydraulique',
          'Nucléaire',
          ],
        datasets: [
          {
            backgroundColor:  [
              '#6C6F93', // charbon
              '#E95678', // gaz
              '#2E303E', // pétrole
              '#F6661E', // biocarbutants et déchets
              '#EE64AE', // éolien
              '#59E3E3', // hydraulique
              '#29D398', // nucléaire
              ],
            data: [
              1569468, // charbon 
              1443191, // gaz
              1216762, // pétrole
              426697, // biocarbutants et déchets
              220270, // éolien
              166927, // hydraulique
              161961, // nucléaire
            ]
          },
        ],
      }"
      :options="{
        title: {
          display: true,
          text: ['Evolution de la production d\'énergie par source','(ktep, monde, IEA, 1990 vs 2017)'],
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
          intersect: false,
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
    International Energy Agency</a>. Energy topic: Energy supply. Indicator: Total primary energy supply (TPES) by source. Country or region: World.</p>
    <p><strong>Description:</strong> 
      graphique en barres représentant l'évolution de la production d'énergie (exprimée en kilotonnes équivalent pétrole) par source d'énergie, entre 1990 et 2017 dans le monde. Les données sont rangées par ordre décroissant de gauche à droite. 
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
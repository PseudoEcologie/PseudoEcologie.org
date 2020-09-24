<template>
  <div>
    <HbarChart
      :chartData="{
        labels: [
          'Charbon lignite',
          'Charbon', 
          'Pétrole', 
          'Biomasse', 
          'Gaz', 
          'Nucléaire (étude 2007)',
          'éolien',
          'Hydraulique',
          'Solaire',
          'Nucléaire (étude 2016)', 
          'Biocarburants'],
        datasets: [
          {
            barThickness: 25,
            backgroundColor:  [
              '#4c4e67', // charbon lignite
              '#6C6F93', // charbon
              '#2E303E', // pétrole
              '#FBC3A7', // biomasse
              '#E95678', // gaz
              '#29D398', // nucléaire 2007
              '#EE64AE', // éolien
              '#59E3E3', // hydraulique
              '#FBC3A7', // solaire
              '#29D398', // nucléaire 2016
              '#F6661E', // biocarburants
              ],
            data: [
              32.72, // charbon lignite
              24.62, // charbon 
              18.43, // pétrole 
              4.63, // biomasse
              2.82, // gaz
              0.074, // nucléaire 2007
              0.035, // éolien
              0.024, // hydraulique
              0.019, // solaire
              0.01, // nucléaire 2016
              0.005, // biocarburants
            ]
          },
        ],
      }"
      :options="{
        title: {
          display: true,
          text: ['Estimation des décès par TWh produit','(par moyen, monde, OurWorldInData, 2020)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: false,
        },
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: `Décés par TWh`,
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
                    return tooltipItems.value + ' décès par TWh';
                }
            }

        }
      }"
    />
    <details>
    <p><strong>Source:</strong> Compilation de
    <a rel="noopener noreferrer" target="_blank" href="https://ourworldindata.org/safest-sources-of-energy">
      OurWorldInData
    </a> a partir de plusieurs sources.</p>
    <p><strong>Description:</strong> 
      graphique en barres horizontales représentant le nombre de décès estimés par terrawatt heure produit, pour chaque mode de production d'électricité dans le monde. Les données sont rangées par ordre décroissant de haut en bas. 
    </p>
    <p><strong>Note:</strong>
      Deux études sont présentées pour le nucléaire, les deux présentent des problèmes de méthodologies : l'étude de 2007 utilise un chiffre obsolète sur-estimant les décès liés à Chernobyl, et ne considère ni Fukushima ni la production récente du Nucléaire. L'étude de 2016 ne considère que les victimes des accidents, ignorant les décès liés aux mines par exemple, et utilise un chiffre qui sur-estime les victimes de Fukushima. Les deux études comptent également l'accident de Kyshtym, qui est un accident du nucléaire militaire, et non lié à la production d'électricité civile.  
    </p>
    </details>
  </div>
</template>

<script>
import HbarChart from "../../HbarChart.js";

export default {
  components: {
    HbarChart,
  },
};
</script>
<template>
  <div>
    <BarChart
      :chartData="{
        labels: [
          'Photovoltaïque', 
          'Hydroélectrique', 
          'Eolien', 
          'Géothermie',
          'Charbon',
          'Biomasse',
          'Nucléaire',
          'Gaz naturel',
          ],
        datasets: [
          {
            label: 'Ciment',
            backgroundColor: '#FADAD1',
            data: [
              3700, // Photovoltaïque 
              0, // Hydroélectrique 
              0, // Eolien
              750, // Géothermie
              0, // Charbon
              0, // Biomasse
              0, // Nucléaire
              0, // Gaz naturel
            ]
          },
          {
            label: 'Béton',
            backgroundColor: '#F9CBBE',
            data: [
              350, // Photovoltaïque 
              14000, // Hydroélectrique 
              8000, // Eolien
              1100, // Géothermie
              870, // Charbon
              760, // Biomasse
              760, // Nucléaire
              400, // Gaz naturel
            ]
          },
          {
            label: 'Cuivre',
            backgroundColor: '#F77D26',
            data: [
              850, // Photovoltaïque 
              1, // Hydroélectrique 
              23, // Eolien
              2, // Géothermie
              1, // Charbon
              0, // Biomasse
              3, // Nucléaire
              0, // Gaz naturel
            ]
          },
          {
            label: 'Aluminium',
            backgroundColor: '#44CCDD',
            data: [
              680, // Photovoltaïque 
              0, // Hydroélectrique 
              35, // Eolien
              100, // Géothermie
              3, // Charbon
              6, // Biomasse
              0, // Nucléaire
              1, // Gaz naturel
            ]
          },
          {
            label: 'Verre',
            backgroundColor: '#59E3E3',
            data: [
              2700, // Photovoltaïque 
              0, // Hydroélectrique 
              92, // Eolien
              0, // Géothermie
              0, // Charbon
              0, // Biomasse
              0, // Nucléaire
              0, // Gaz naturel
            ]
          },
          {
            label: 'Acier',
            backgroundColor: '#6C6F93',
            data: [
              7900, // Photovoltaïque 
              67, // Hydroélectrique 
              1800, // Eolien
              3300, // Géothermie
              310, // Charbon
              310, // Biomasse
              160, // Nucléaire
              170, // Gaz naturel
            ]
          },
          {
            label: 'Fer',
            backgroundColor: '#F43E5C',
            data: [
              0, // Photovoltaïque 
              0, // Hydroélectrique 
              120, // Eolien
              9, // Géothermie
              1, // Charbon
              4, // Biomasse
              5, // Nucléaire
              1, // Gaz naturel
            ]
          },
          {
            label: 'Plastique',
            backgroundColor: '#E84A72',
            data: [
              210, // Photovoltaïque 
              0, // Hydroélectrique 
              190, // Eolien
              0, // Géothermie
              0, // Charbon
              0, // Biomasse
              0, // Nucléaire
              0, // Gaz naturel
            ]
          },
          {
            label: 'Silicone',
            backgroundColor: '#EE64AE',
            data: [
              57, // Photovoltaïque 
              0, // Hydroélectrique 
              0, // Eolien
              0, // Géothermie
              0, // Charbon
              0, // Biomasse
              0, // Nucléaire
              0, // Gaz naturel
            ]
          },
          {
            label: 'Plomb',
            backgroundColor: '#2E303E',
            data: [
              0, // Photovoltaïque 
              0, // Hydroélectrique 
              0, // Eolien
              0, // Géothermie
              0, // Charbon
              0, // Biomasse
              2, // Nucléaire
              0, // Gaz naturel
            ]
          },
        ],
      }"
      :options="{
        title: {
          display: true,
          text: ['Matériaux utilisés par TWh produit','(tonnes par moyen, ministère de l\'énergie américain, 2015)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              ticks: {
                beginAtZero: true,
              }
            },
          ],
          yAxes: [
            {
              stacked: true,
            }
          ],
        },
        tooltips: {
            mode: 'index',
            callbacks: {
                label: function(tooltipItems, data) {
                    return tooltipItems.value + ' t ' + data.datasets[tooltipItems.datasetIndex].label;
                }
            }

        }
      }"
    />
    <details>
    <p><strong>Source:</strong> Issus d'un rapport de 2015 du
    <a rel="noopener noreferrer" target="_blank" href="https://ourworldindata.org/safest-sources-of-energy">
      ministère de l'écologie américain
    </a>, page 390.</p>
    <p><strong>Description:</strong> 
      graphique en barres représentant la quantité de matériaux utilisés par terrawatt heure produit, pour chaque mode de production d'électricité dans le monde. 
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
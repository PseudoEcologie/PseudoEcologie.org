<template>
  <div>
    <DoughnutChart
      :chartData="{
          labels: ['Energie','Industrie (hors énergie)','Déchets','Agriculture/sylviculture  (hors énergie)'],
          datasets: [{
              data: [73.2,5.2,3.2,18.4],
              labels: ['Energie','Industrie (hors énergie)','Déchets','Agriculture/sylviculture  (hors énergie)'],
              backgroundColor: ['#F43E5C','#6C6F93','#F6661E','#27D796'],
            },{
              data: [24.2,16.2,17.5,5.8,1.7,7.8,3,2.2,1.3,1.9,0.1,1.4,2.2,3.5,1.3,4.1,5.8],
              labels: ['Industrie','Transport','Batiments', 'Production énergie', 'Agriculture et pêche','Autres', 'Ciment','Chimie (hors énergie)','Eaux usées','Décharges','Herbages','Terres cultivées','Déforestation','Incendie de cultures','Riziculture','Sol agricole','Bétail et fumier'],
              backgroundColor: ['#F43E5C','#F43E5C','#F43E5C','#F43E5C','#F43E5C','#F43E5C','#6C6F93','#6C6F93','#F6661E','#F6661E','#27D796','#27D796','#27D796','#27D796','#27D796','#27D796','#27D796'],
            },
        ],
       }"
      :options="{
        title: {
          display: true,
          text: ['Emissions de GES par sources','(% des émissions de GES, Monde, ClimateWatch, 2020)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        tooltips: {
            callbacks: {
              label: function(tooltipItem, data) {
                var label = data.datasets[tooltipItem.datasetIndex].labels[tooltipItem.index];
                var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return label + ': ' + value + '%';
              }
            }
        }
      }"
    />
    <details>
      <p><strong>Source:</strong> Compilation de Hannah Ritchie à partir des données de
      <a rel="noopener noreferrer" target="_blank" href="https://www.climatewatchdata.org/">
        ClimateWatch data
      </a></p>
      <p><strong>Description:</strong>
        graphique représentant la part des émissions de gaz à effet de serre (exprimée en %) par sources. Le cercle intérieur précise l'origine.
      </p>
    </details>
  </div>
</template>

<script>
import DoughnutChart from "../../DoughnutChart.js";

export default {
  components: {
    DoughnutChart,
  },
};
</script>
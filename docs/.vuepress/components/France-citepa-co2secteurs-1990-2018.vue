<template>
  <div>
    <DoughnutChart
      :chartData="{
          labels: ['industrie énergie','industrie','Déchets','Résidentiel/tertiaire','Agriculture/sylviculture','Transports'],
          datasets: [{
              data: [10,18,3,19,19,31],
              backgroundColor: ['#6C6F93', '#2E303E','#F6661E','#B877DB','#27D796','#F43E5C'],
            },{
              data: [14,26,3,17,17,23],
              backgroundColor: ['#6C6F93', '#2E303E','#F6661E','#B877DB','#27D796','#F43E5C'],
            },
        ],
       }"
      :options="{
        title: {
          display: true,
          text: ['Emissions de GES par secteurs','(% des émissions de GES, France, Citepa, 1990 vs 2018)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
      }"
    />
    <details>
      <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.citepa.org/fr/secten/">
        Rapport SECTEN édition 2020
      </a> du CITEPA, page 79.</p>
      <p><strong>Description:</strong>
        graphique représentant la part des émissions de gaz à effet de serre (exprimée en %) par secteurs d'activités. L'année 1990 est à l'intérieur, l'année 2018 à l'extérieur.
      </p>
    </details>
  </div>
</template>

<script>
import DoughnutChart from "./DoughnutChart.js";

export default {
  components: {
    DoughnutChart,
  },
};
</script>
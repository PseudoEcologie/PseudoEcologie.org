<template>
  <div>
    <DoughnutChart
      :chartData="{
          labels: ['industrie énergie','industrie','Résidentiel/tertiaire','Agriculture/sylviculture','Transports'],
          datasets: [{
              data: [11,32,18.4,24.8,14.3],
              backgroundColor: ['#6C6F93', '#2E303E','#B877DB','#27D796','#F43E5C'],
            },
        ],
       }"
      :options="{
        title: {
          display: true,
          text: ['Emissions de GES par secteurs','(% des émissions de GES, Monde, GIEC, 2010)'],
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
      <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.ipcc.ch/site/assets/uploads/2018/02/SYR_AR5_FINAL_full.pdf">
        AR5 Synthesis Report: Climate Change 2014
      </a> du GIEC, figure 1.7.</p>
      <p><strong>Description:</strong>
        graphique représentant la part des émissions de gaz à effet de serre (exprimée en %) par secteurs d'activités dans le monde en 2010.
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
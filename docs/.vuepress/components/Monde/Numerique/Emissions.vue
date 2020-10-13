<template>
  <div>
    <DoughnutChart
      :chartData="{
          labels: ['Numérique','Autre'],
          datasets: [{
              data: [3.7,96.3],
              labels: ['Numérique','Autre'],
              backgroundColor: ['#F43E5C','#c2c4c5'],
            },{
              data: [1.65, 2.05,96.3],
              labels: ['Production des équipements','Utilisation des équipements','Autre'],
              backgroundColor: ['#F43E5C','#F43E5C','#c2c4c5'],
            },
        ],
       }"
      :options="{
        title: {
          display: true,
          text: ['Emissions du numérique','(% des émissions totales, Monde, Sénat Français, 2020)'],
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
      <p><strong>Source:</strong> 
      <a rel="noopener noreferrer" target="_blank" href="http://www.senat.fr/fileadmin/Fichiers/Images/redaction_multimedia/2020/2020-Documents_pdf/20200624_Conf_presse_Dev_Dur/20200624_Conf_Dev_Dur_RI_empreinte_environnementale.pdf">
        Rapport d'information du Sénat
      </a>
      se basant sur plusieurs sources scientifiques.</p>
      <p><strong>Description:</strong>
        graphique représentant la part des émissions de gaz à effet de serre (exprimée en %) du numérique face au total des émissions mondiales. Le cercle intérieur précise l'origine.
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
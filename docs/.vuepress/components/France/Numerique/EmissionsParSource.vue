<template>
  <div>
    <DoughnutChart
      :chartData="{
          labels: ['Terminaux','Data Centers', 'Réseaux'],
          datasets: [{
              data: [81,14,5],
              labels: ['Terminaux','Data Centers', 'Réseaux'],
              backgroundColor: ['#DA103F','#F77D26','#6C6F93'],
            },{
              data: [70, 11, 7.42, 6.58, 5],
              labels: ['Fabrication et distribution','Utilisation', 'Data Centers étrangers', 'Data Centers français','Réseaux'],
              backgroundColor: ['#DA103F','#DA103F','#F77D26','#F77D26','#6C6F93'],
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
        graphique représentant la part des émissions de gaz à effet de serre (exprimée en %) du numérique face au total des émissions française. Le cercle intérieur précise l'origine.
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
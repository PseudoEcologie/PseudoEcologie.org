<template>
  <div>
    <HbarChart
      :chartData="{
        labels: [
          'Solaire',
          'Hydroelectrique',
          'Charbon (ciel ouvert)', 
          'Géothermie', 
          'Eolien',
          'Gaz conventionnel', 
          'Charbon (sous-terrain)', 
          'Gaz de roche-mère', 
          'Nucléaire', 
          ],
        datasets: [
          {
            backgroundColor:  [
              '#FAB795', // solaire
              '#59E3E3', // hydroelectrique
              '#6C6F93', // charbon
              '#FBC3A7', // géothermie
              '#EE64AE', // éolien
              '#E95678', // gaz conventionnel
              '#6C6F93', // charbon (sous-terrain)
              '#E95678', // gaz de roche mère
              '#29D398', // nucléaire
              ],
            data: [
              19.25, // solaire
              16.86, // hydroelectrique
              8.19, // charbon 
              5.14, // géothermie
              1.31, // éolien
              0.95, // gaz conventionnel
              0.64, // charbon (sous-terrain)
              0.19, // gaz de roche mère
              0.13, // nucléaire
            ]
          },
        ],
      }"
      :options="{
        title: {
          display: true,
          text: ['Empreinte au sol par TWh produit','(km² par moyen, Anne M. Trainor et al, 2016)'],
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
                labelString: `km² par TWh`,
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
                    return tooltipItems.value + ' km²/TWh';
                }
            }

        }
      }"
    />
    <details>
    <p><strong>Source:</strong> étude américaine publiée en 2016 par
    <a rel="noopener noreferrer" target="_blank" href="https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf">
    Anne M. Trainor, Robert I. McDonald et Joseph Fargione
    </a>. Table 2.</p>
    <p><strong>Description:</strong> 
      graphique en barres horizontales représentant l'empreinte au sol (exprimées en km²) pour un TWh produit par moyen de production d'électricité. Les données sont rangées par ordre décroissant de haut en bas. 
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
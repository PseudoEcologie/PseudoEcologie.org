<template>
  <div>
    <HbarChart
      :chartData="{
        labels: [
          'Charbon', 
          'Gaz', 
          'Biomasse', 
          'Solaire domestique', 
          'Solaire centrale',
          'Hydraulique',
          'éolien',
          'Nucléaire', 
          'éolien offshore'],
        datasets: [
          {
            barThickness: 25,
            backgroundColor:  [
              '#232530', // charbon
              '#DC3318', // gaz
              '#F6661E', // biomasse
              '#FAB795', // solaire domestique
              '#FBC3A7', // solaire centrale
              '#59E3E3', // hydraulique
              '#F075B7', // éolien
              '#29D398', // nucléaire
              '#F075B7', // éolien offshore
              ],
            data: [
              820, // charbon 
              490, // gaz
              230, // biomasse
              41, // solaire domestique
              27, // solaire centrale
              24, // hydraulique
              12, // éolien
              12, // nucléaire
              11, // éolien offshore

            ]
          },
        ],
      }"
      :options="{
        title: {
          display: true,
          text: ['Emissions des moyens de production d\'électricité','(médiane mondiale, GIEC, 2014)'],
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
                labelString: `grammes d'équivalent CO2 par kWh`,
              },
              ticks: {
                beginAtZero: true,
              }
            },
          ],
        },
      }"
    />
    <details>
    <p><strong>Source:</strong> <a rel="noopener noreferrer" target="_blank" href="https://www.ipcc.ch/site/assets/uploads/2018/02/ipcc_wg3_ar5_annex-iii.pdf">Schlömer S., T. Bruckner, L. Fulton, E. Hertwich, A. McKinnon, D. Perczyk, J. Roy, R. Schaeffer, R. Sims, P. Smith, and R. Wiser,
2014: Annex III: Technology-specific cost and performance parameters. In: Climate Change 2014: Mitigation of Climate
Change. Contribution of Working Group III to the Fifth Assessment Report of the Intergovernmental Panel on Climate
Change [Edenhofer, O., R. Pichs-Madruga, Y. Sokona, E. Farahani, S. Kadner, K. Seyboth, A. Adler, I. Baum, S. Brunner, P.
Eickemeier, B. Kriemann, J. Savolainen, S. Schlömer, C. von Stechow, T. Zwickel and J.C. Minx (eds.)]. Cambridge University
Press, Cambridge, United Kingdom and New York, NY, USA.</a> Page 1335.</p>
    <p><strong>Description:</strong> Il s'agit d'une analyse des émissions gaz à effet de serre, prenant en compte l'ensemble du cycle de vie (de la construction au démentelement) puis exprimé en grammes d'equivalent C02 émis par kilowattheure produit. La valeur conservée pour ce graphique est la médiane mondiale calculée par le GIEC pour chaque moyen de production. Les données sont classées par ordre décroissant.</p>
    </details>
  </div>
</template>

<script>
import HbarChart from "./HbarChart.js";

export default {
  components: {
    HbarChart,
  },
};
</script>
<template>
  <div>
    <LineChart
      :chartData="{
          labels: ['1985','1986','1987','1988','1989','1990','1991','1992','1993','1994','1995','1996','1997','1998','1999','2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016','2017','2018','2019'],
              datasets: [{ 
              data: [3747.63,3838.27,4057.28,4199.20,4377.12,4460.40,4557.36,4650.56,4727.10,4892.75,5039.42,5279.99,5395.74,5507.31,5626.91,5989.37,6068.98,6319.81,6765.13,6985.99,7358.06,7760.15,8251.12,8266.01,8115.19,8634.04,9075.43,9111.01,9579.44,9755.20,9405.28,9441.98,9736.28,10091.26,9824.08],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: true
            }, { 
              data: [1422.36,1428.76,1512.94,1536.55,1724.39,1785.09,1811.07,1822.88,1856.38,1917.40,2028.08,2090.28,2258.31,2394.40,2586.88,2759.33,2937.84,3141.58,3297.09,3550.29,3752.96,3966.30,4289.81,4434.26,4453.60,4871.29,4925.44,5216.51,5083.66,5240.46,5588.03,5823.70,5925.57,6082.47,6297.90],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [1979.77,2006.57,2033.71,2098.72,2087.57,2158.91,2209.41,2209.07,2341.24,2356.88,2485.63,2520.50,2566.14,2586.94,2605.68,2651.96,2583.89,2631.85,2627.60,2820.74,2916.35,3027.67,3079.34,3257.39,3252.50,3435.83,3501.07,3649.72,3814.04,3894.18,3884.62,4012.95,4065.87,4171.40,4222.21],
              label: 'Hydroélectrique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [1488.92,1594.74,1734.73,1891.25,1945.01,2000.46,2096.17,2112.09,2184.83,2225.84,2322.40,2406.80,2390.28,2431.38,2524.36,2580.90,2653.77,2696.17,2641.57,2761.61,2768.87,2803.37,2746.24,2737.71,2698.98,2768.51,2652.68,2470.81,2493.40,2541.14,2575.76,2614.91,2638.55,2700.37,2795.96],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: '-1'
            },{ 
              data: [1108.76,1166.25,1181.02,1254.29,1346.72,1364.58,1349.79,1327.67,1265.84,1301.39,1258.85,1244.69,1244.31,1294.89,1266.92,1244.15,1208.90,1189.36,1193.50,1169.94,1170.70,1065.79,1085.08,1058.10,991.96,943.77,1044.09,1139.78,1067.19,1029.03,1024.27,969.91,877.61,890.40,825.34],
              label: 'Pétrole',
              borderColor: '#2E303E',
              backgroundColor: 'rgb(46, 48, 62, 0.9)',
              fill: '-1'
            },{ 
              data: [0.06,0.14,0.20,0.33,2.65,3.63,4.09,4.73,5.70,7.12,8.26,9.20,12.02,15.92,21.22,31.42,38.39,52.33,62.92,85.12,104.09,132.86,170.73,220.65,276.05,346.51,440.62,530.85,635.77,706.47,831.57,963.77,1140.97,1270.16,1429.62],
              label: 'Eolien',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.9)',
              fill: '-1'
            },{ 
              data: [77.79,85.58,91.64,94.28,104.35,116.96,121.98,130.94,135.28,140.41,146.36,150.57,161.29,168.76,177.39,186.06,191.88,206.36,217.93,235.28,254.59,271.69,294.78,315.50,339.65,379.88,398.74,430.76,463.99,500.91,538.28,547.87,582.89,615.04,651.81],
              label: 'Autres renouvelables',
              borderColor: '#F6661E',
              backgroundColor: 'rgb(246, 102, 30, 0.9)',
              fill: '-1'
            },{ 
              data: [0.01,0.02,0.01,0.01,0.26,0.39,0.51,0.47,0.56,0.60,0.64,0.71,0.76,0.83,0.92,1.12,1.40,1.76,2.26,2.97,4.17,5.72,7.77,12.64,20.97,33.71,65.12,100.81,139.12,197.86,256.84,328.24,446.95,582.75,724.09],
              label: 'Photovoltaïque',
              borderColor: '#FAB795',
              backgroundColor: 'rgb(250, 183, 149, 0.9)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Production d\'électricité par source','(TWh par année, monde, BP & Ember, 1985-2019)'],
          fontSize: 14,
        },
        maintainAspectRatio: false,
        legend: {
          display: true,
          position: 'bottom',
        },
        elements: {
          point: { radius: 0, hitRadius: 5, hoverRadius: 5 }
        },
        scales: {
          xAxes: [{
            type: 'time',
            distribution: 'linear',
            ticks:{
                display: true,
                autoSkip: true,
                maxTicksLimit: 15
            }
          }],
          yAxes: [{
            stacked: true,
            scaleLabel: {
                display: true,
                labelString: `terrawatt-heure`,
            },
          }]
        },
        tooltips: {
            callbacks: {
                label: function(tooltipItems, data) {
                    return data.datasets[tooltipItems.datasetIndex].label +': ' + tooltipItems.yLabel + ' TWh';
                }
            }

        }
      }"
    />
    <details>
      <p><strong>Source:</strong> compilation de <a rel="noopener noreferrer" target="_blank" href="https://ourworldindata.org/grapher/electricity-production-by-source?time=earliest..latest">OurWorldInData</a>
      , à partir des sources 
      <a rel="noopener noreferrer" target="_blank" href="https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html">
        BP Statistical Review of World Energy
      </a> et <a rel="noopener noreferrer" target="_blank" href="https://ember-climate.org/data/">
        Ember Climate
      </a>.</p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'électricité produite (exprimée en terrawatt-heure) par source d'énergie (ayant une part significative) dans le monde, par année entre 1985 et 2019. Les données sont rangées par ordre croissant de haut en bas.
      </p>
    </details>
  </div>
</template>

<script>
import LineChart from "../../LineChart.js";

export default {
  components: {
    LineChart,
  },
};
</script>
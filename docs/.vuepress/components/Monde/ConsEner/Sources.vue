<template>
  <div>
    <LineChart
      :chartData="{
          labels: [1800,1810,1820,1830,1840,1850,1860,1870,1880,1890,1900,1910,1920,1930,1940,1950,1960,1965,1966,1967,1968,1969,1970,1971,1972,1973,1974,1975,1976,1977,1978,1979,1980,1981,1982,1983,1984,1985,1986,1987,1988,1989,1990,1991,1992,1993,1994,1995,1996,1997,1998,1999,2000,2001,2002,2003,2004,2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019],
          datasets: [{ 
              data: [5556,5833,6111,6389,6944,7222,6944,6944,6944,6667,6111,6389,6944,7222,7222,7500,8889,9162,9218,9274,9331,9387,9444,9499,9553,9608,9663,9718,9774,9830,9886,9943,10000,10106,10213,10321,10430,10541,10653,10765,10879,10995,11111,11243,11376,11511,11647,11785,11925,12066,12209,12414,12500,12500,12470,12329,12160,12076,11993,11911,11829,11747,11667,11553,11441,11330,11220,11111,11111,11111,11111,11111],
              label: 'Biomasse traditionelle',
              borderColor: '#F6661E',
              backgroundColor: 'rgb(246, 102, 30, 0.9)',
              fill: true
            },{ 
              data: [0,0,0,0,0,0,0,6,33,89,181,397,889,1756,2653,5444,11097,18109,19496,20891,22675,24577,26708,28205,30378,32746,32272,31948,34030,35215,36426,37024,35577,34296,33198,32969,33739,33789,34803,35499,36703,37300,37691,37691,38344,38099,38935,39445,40380,41413,41624,42371,42897,43278,43639,44610,46256,46824,47367,47958,47566,46654,48087,48550,49157,49689,50014,50892,51920,52568,53181,53620],
              label: 'Pétrole',
              borderColor: '#2E303E',
              backgroundColor: 'rgb(46, 48, 62, 0.9)',
              fill: '-1'
            },{ 
              data: [97,128,153,264,356,569,1061,1642,2542,3856,5728,8656,9833,10125,11586,12603,15442,16140,16324,16061,16301,16799,17059,16966,17154,17668,17682,18025,18688,19241,19458,20364,20858,21150,21384,22045,23000,23986,24256,25210,25965,26213,25895,25643,25550,25675,25774,25954,26572,26527,26360,26522,27417,27853,28945,31497,33664,36171,38071,40224,40770,40149,41997,44018,44185,44993,44954,43844,43196,43360,44109,43849],
              label: 'Charbon',
              borderColor: '#6C6F93',
              backgroundColor: 'rgb(108, 111, 147, 0.9)',
              fill: '-1'
            },{ 
              data: [0,0,0,0,0,0,0,0,0,33,64,142,233,603,875,2092,4472,6303,6869,7375,8044,8833,9614,10292,10861,11378,11656,11661,12356,12761,13294,14119,14239,14394,14469,14703,15903,16261,16419,17281,18089,18869,19483,19975,20067,20269,20394,21108,22164,22033,22439,23075,24000,24331,25053,25753,26736,27464,28175,29325,30025,29411,31606,32372,33219,33767,33994,34781,35589,36586,38517,39292],
              label: 'Gaz',
              borderColor: '#E95678',
              backgroundColor: 'rgb(233, 86, 120, 0.9)',
              fill: '-1'
            },{ 
              data: [0,0,0,0,0,0,0,0,0,14,17,33,64,131,192,333,689,923,984,1006,1059,1122,1175,1227,1285,1303,1431,1449,1443,1492,1614,1695,1732,1769,1801,1878,1941,1980,2007,2034,2099,2088,2159,2209,2209,2341,2357,2486,2520,2566,2587,2606,2652,2584,2632,2628,2821,2916,3028,3079,3257,3252,3436,3501,3650,3814,3894,3885,4013,4066,4171,4222],
              label: 'Hydraulique',
              borderColor: '#59E3E3',
              backgroundColor: 'rgb(89, 227, 227, 0.9)',
              fill: '-1'
            },{ 
              data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,26,34,41,52,62,79,110,152,204,267,370,433,539,626,651,712,841,912,1034,1255,1489,1595,1735,1891,1945,2000,2096,2112,2185,2226,2322,2407,2390,2431,2524,2581,2654,2696,2642,2762,2769,2803,2746,2738,2699,2769,2653,2471,2493,2541,2576,2615,2639,2700,2796],
              label: 'Nucléaire',
              borderColor: '#29D398',
              backgroundColor: 'rgb(41, 211, 152, 0.9)',
              fill: '-1'
            },{ 
              data: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,3,4,4,5,6,7,8,9,12,16,21,31,38,52,63,85,104,133,171,221,276,347,441,531,636,706,832,964,1141,1270,1430],
              label: 'Eolien et solaire',
              borderColor: '#EE64AE',
              backgroundColor: 'rgb(238, 100, 174, 0.8)',
              fill: '-1'
            },
        ],
  }"
      :options="{
        title: {
          display: true,
          text: ['Consommation d\'énergie par source (série longue)','(Terrawatt heure, monde, Vaclav Smil & BP, 1800-2019)'],
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
                labelString: `terrawatt heure`,
            },
          }]
        },
      }"
    />
    <details>
      <p><strong>Source:</strong> compilation de <a rel="noopener noreferrer" target="_blank" href="https://ourworldindata.org/">OurWorldInData</a>, a partir des sources <a rel="noopener noreferrer" target="_blank" href="http://vaclavsmil.com/2016/12/14/energy-transitions-global-and-national-perspectives-second-expanded-and-updated-edition/">
        Vaclav Smil (2017). Energy Transitions: Global and National Perspectives
      </a> et <a rel="noopener noreferrer" target="_blank" href="https://www.bp.com/en/global/corporate/energy-economics/statistical-review-of-world-energy.html">
        BP Statistical Review of World Energy
      </a>.</p>
      <p><strong>Description:</strong>
        graphique représentant la quantité d'énergie consommée (exprimée en terrawatt heure) par source d'énergie (ayant une part significative) dans le monde, entre 1800 et 2019. Les données sont rangées par ordre décroissant de haut en bas, excepté la biomasse traditionelle placée en bas du graphique.
      </p>
      <p><strong>Note:</strong>
        les données de 1800 à 1960 sont décénales, les données de 1965 à 2019 sont annuelles.
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
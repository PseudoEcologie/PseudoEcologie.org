<template>
    <LineChart
        :chart-data="{
            labels,
            datasets: [
                {
                    barThickness: 10,
                    backgroundColor: colors[color] ? colors[color] : color,
                    data,
                },
            ],
        }"
        :options="{
            title: {
                display: true,
                text: title,
                padding: 15,
                fontFamily: 'Open Sans',
                fontSize: 20,
            },
            legend: {
                display: true,
            },
            scales: {
                yAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: `# of ${title}`,
                        },
                    },
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: false,
                            labelString: 'Date',
                        },
                    },
                ],
            },
        }"
    />
</template>

<script>
    import LineChart from '~/charts/Chart.js';

    export default {
        components: {
            LineChart,
        },
        props: ['labels', 'data', 'title', 'color'],
        data() {
            return {
                colors: {
                    green: '#6c9b8b',
                    darkblue: '#13293e',
                    orange: '#fd7122',
                },
            };
        },
    };
</script>

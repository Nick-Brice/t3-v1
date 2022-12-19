import React from 'react';
import { Chart as ChartJS, registerables, Colors } from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2'
import { BottomBar } from '@icon-park/react';
ChartJS.register(...registerables);
ChartJS.register(Colors);

const CollectionRateChart = ({ data }) => {
    const chartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
            {
                label: 'Collection Rate',
                data,


                borderWidth: 1,
            },
        ],
    };

    const options = {
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    color: 'rgb(255, 99, 132)'
                },
                colors: {
                    enabled: true
                }
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true,
                        },
                    },
                ],
            },
        }
    }

    return (
        <div>
            <h3 className="text-center font-bold mt-10 mb-4 text-gray-800">
                Collection Rate
            </h3>
            <Bar data={chartData} options={options} />
            <Pie data={chartData} options={options} />
        </div >
    );
};

export default CollectionRateChart;

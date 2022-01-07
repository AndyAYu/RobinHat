import React from 'react';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
import { Link } from 'react-router-dom';


const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
const closeV = [1,2,3,4,5,6,7];
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: false,
        },
    },
    scales: {
        xAxes: [{
            gridLines: {
                display:false
            }
        }],
        yAxes: [{
            gridLines: {
                display:false
            }
        }]
    },
};

export const data = { 
    labels,
    datasets: [
        {
            label: 'AMD',
            data: closeV.reverse(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const LineChart = () => {
    return (
    <div className="stockpage">
        <div className="chart-box">
            <Line
            data={data}
            options={options}
            height={400}
            width={600}
            />
        </div>
        <div className="watchlist">
            <div className="watchlist-box">
            <p>Watchlist</p>
            <div className="watchlist-stocks">
                <Link to="/">Amd</Link>
            </div>
            </div>
        </div>
        
    </div>
    )
}

export default LineChart;

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
const closeV1 = [1,2,3,4,5,6,7];
const closeV2 = [7,6,5,4,3,2,1]
const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top'
        },
        title: {
            display: false
        },
        tooltip: {
            mode: 'nearest',
            intersect: false,
        },
    },
};

export const data = { 
    labels,
    datasets: [
        {
            id: 1,
            label: 'AMD',
            data: closeV1.reverse(),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
        {
            id: 2,
            label: 'DMA',
            data:closeV2.reverse(),
            borderColor: 'rgb(1,1,1)',
            backgroundColor: 'rgba(1,1,1, 0.5)'
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
                <Link to={`/stock/AMD`}>AMD</Link>
            </div>
            </div>
        </div>
        
    </div>
    )
}

export default LineChart;

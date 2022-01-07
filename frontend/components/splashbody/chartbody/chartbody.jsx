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

// want to use date function to make labels more dynamic for the future
// date buttons.
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
            mode: 'index',
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
// in LineChart-want to make path endpoint and Link.name more dynamic.
// ${data.dataset.label} < wrong reference???

// for stocks on the right side >> button onclick invoke defined function??
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
                <div>
                {/* <Link to={`/stock/AMD`}>AMD</Link> */}
                <br />
                {/* <Link to={`/stock/DMA`}>DMA</Link>  */}
                </div>
                <br /> 
            </div>
            </div>
        </div>
        
    </div>
    )
}

export default LineChart;

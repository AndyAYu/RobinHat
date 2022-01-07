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
import faker from 'faker';

const labels = [1/1/2021]

export const data = { 
    labels,
    datasets: [
        {
            label: 'AMD',
            data: labels.map(() => faker.datatype.number({ min: 0, max: 200})),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        },
    ],
};

const LineChart = () => {
    return <div>
        <div className="chart-box">
        <Line
        data={data}
        height={400}
        width={600}
        />
        </div>
        <div className="watchlist">
            Watchlist
        </div>
        
    </div>
}

export default LineChart;

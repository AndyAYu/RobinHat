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

const LineChart = () => {
    return <div>
        <Line
        data={{
            labels: ['Red','Yellow','Pink','Green'],     
            datasets: [{
                id: 1,
                label: '',
                data:[5,6,7]
            }]  
        }}
        height={400}
        width={600}
        />
        ;
    </div>
}

export default LineChart;

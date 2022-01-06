import React from 'react';
import { Bar } from "react-chartjs-2";

const BarChart = () => {
    return <div>
        <Bar
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

export default BarChart;
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
// const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
// let closeV1 = [1,2,3,4,5,6,7];
// const closeV2 = [7,6,5,4,3,2,1]
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
    scales: {
        y: {
            grid: {
                display: false
            }
        },
        x: {
            grid: {
                display: false
            }
        }
    }
};

// in LineChart-want to make path endpoint and Link.name more dynamic.
// ${data.dataset.label} < wrong reference???

// export const data = { 
//     labels,
//     datasets: [
//         {
//             id: 1,
//             label: 'AMD',
//             data: closeV1.reverse(),
//             borderColor: 'rgb(255, 99, 132)',
//             backgroundColor: 'rgba(255, 99, 132, 0.5)',
//         },
//         {
//             id: 2,
//             label: 'DMA',
//             data:closeV2.reverse(),
//             borderColor: 'rgb(1,1,1)',
//             backgroundColor: 'rgba(1,1,1, 0.5)'
//         },
//     ],
// };

// for stocks on the right side >> button onclick invoke defined function??

class LineChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newobj: {
                labels: [],
                datasets: []
            },
        };
        this.amdFetch = this.amdFetch.bind(this);
    };

    amdFetch(){
        fetch(`https://cloud.iexapis.com/stable/stock/amd/chart/1y?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        .then(response => response.json())
        .then(data => {
            let obj = data;
            let closeValues = obj.map((p) => p.close);
            let closeDates = obj.map((d) => d.date);
            let ticker = "AMD";
            let newobj = {
                labels: closeDates,
                datasets: [
                    {
                        label: ticker,
                        data: closeValues,
                        borderColor: 'rgb(190, 220, 211)',
                        backgroundColor: 'rgba(190,220,211, 0.5)'
                    }
                ],
            };
            this.setState({newobj})
            // .then(() => console.log(newobj))
        })
}   

    render(){
    return (
        <div className="stockpage">
        <div className="chart-box">
            <h2>Current Price</h2>
            <Line
            data={this.state.newobj}
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
                    {/* <button onClick={this.amdFetch} id="amdstock">
                        <p>
                        AMD
                        </p>
                    </button> */}
                <Link to={`/stock/AMD`} onClick={this.amdFetch}>AMD</Link>
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
}

export default LineChart;

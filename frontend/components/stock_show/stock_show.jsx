import React, {Component} from 'react';
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
import Header from '../header/header_container';

class StockShow extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newobj: {
                labels: [],
                datasets: [],
            },
        };
    }

    componentDidMount(){
        this.stockFetch(this.props.ticker)
    }

    stockFetch(stock, time="1y") {
        fetch(`https://cloud.iexapis.com/stable/stock/${stock}/chart/${time}?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
            .then(response => response.json())
            .then(data => {
                let obj = data;
                // debugger
                let closeValues = obj.map((p) => p.close);
                let closeDates = obj.map((d) => d.date);
                let color = (closeValues[(closeValues.length - 1)] > closeValues[0]) ? 'rgb(37, 202, 4)' : 'rgb(255, 80, 1)';
                let newobj = {
                    labels: closeDates,
                    datasets: [
                        {
                            label: [],
                            data: closeValues,

                            borderColor: color,
                            backgroundColor: color,
                            pointRadius: 1,
                            pointHoverRadius: 1,
                        }
                    ],
                };
                this.setState({ newobj })
                this.setState(() => ({ currentstock: stock}))
                // .then(() => console.log(newobj))
            })
        // })
    }

    render(){
        let options =
        {
            annotations: {
                annotations: [{
                    type: 'line',
                    mode: 'vertical',
                    scaleID: 'x-axis',
                    borderColor: '#b6fcd5',
                    borderWidth: 2
                }]
            },
            responsive: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top',
                    align: 'start',
                    labels: {
                        boxWidth: 0,
                        boxHeight: 0,
                        padding: 10,
                        font: {
                            size: 18,
                        }
                    }
                },
                title: {
                    display: false,
                },
                tooltip: {
                    mode: 'index',
                    intersect: false,
                    yAlign: 'bottom',
                },
            },
            scales: {
                y: {
                    display: false,
                    grid: {
                        display: false
                    }
                },
                x: {
                    display:false,
                    grid: {
                        display: false
                    }
                },
            },
        };

        return (
            <div>
                <Header />
                <div className="stock-show-chart" width="500" height="500">
                        <Line
                        data={this.state.newobj}
                        options={options}
                        height={550}
                        width={800}
                        />
                </div>
                <div className="chart-box-buttons">
                    <button onClick={() => this.stockFetch((this.state.currentstock), "1d")}> 1D </button>
                    <button onClick={() => this.stockFetch((this.state.currentstock), "5d")}> 1W </button>
                    <button onClick={() => this.stockFetch((this.state.currentstock), "1m")}> 1M </button>
                    <button onClick={() => this.stockFetch((this.state.currentstock), "3m")}> 3M </button>
                    <button onClick={() => this.stockFetch((this.state.currentstock), "1y")}> 1Y </button>
                    <button onClick={() => this.stockFetch((this.state.currentstock), "5y")}> 5Y </button>
                </div>
                <div>
                    trade box here
                </div>

            </div>
            
        );
    }

}

export default StockShow;
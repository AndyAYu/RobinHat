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
            cost: 0,
            balance_remaining: this.props.balance,
            stock_quantity: 0,
            current_price: 0,
            newobj: {
                labels: [],
                datasets: [],
            },
        };
        this.calculator = this.calculator.bind(this);
        this.handleChangeShares = this.handleChangeShares.bind(this);
    }

    componentDidMount(){
        this.stockFetch(this.props.ticker)
    }
    
    stockFetch(stock, time="1y") {
        fetch(`https://cloud.iexapis.com/stable/stock/${stock}/chart/${time}?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
            .then(response => response.json())
            .then(data => {
                let obj = data;
                let closeValues = obj.map((p) => p.close);
                debugger
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
                this.setState({ current_price: closeValues[252] })
            })
    }

    handleChangeShares(event) {
        const amount = event.target.value
        const current_price = this.state.current_price
        this.calculator(current_price, amount)
    }
    calculator(current_price, amount=null){
        const max_quant = (this.props.balance % current_price )
        const cost = ((current_price * amount) / 1.00)
        const balance_result = (this.state.balance_remaining - cost)
        if (amount >= max_quant){
            this.setState({ cost: cost, balance_remaining: 0})            
        }else if (amount <= 0 || amount === null){
            this.setState({ cost: 0, balance_remaining: 10000})
        }else{
            this.setState({ cost:cost, balance_remaining: balance_result })
        }
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
        const stockName = this.props.ticker.toUpperCase()
        const balance = this.state.balance_remaining
        return (
            <div className="stock-show">
                <Header />
                <div className="stock-show-border-box">
                    <div>
                        <div className="stock-show-chart" width="500" height="500">
                                <Line
                                data={this.state.newobj}
                                options={options}
                                height={550}
                                width={800}
                                />
                        </div>
                        <div className="stock-show-date-buttons">
                            <button onClick={() => this.stockFetch((this.state.currentstock), "1d")}> 1D </button>
                            <button onClick={() => this.stockFetch((this.state.currentstock), "5d")}> 1W </button>
                            <button onClick={() => this.stockFetch((this.state.currentstock), "1m")}> 1M </button>
                            <button onClick={() => this.stockFetch((this.state.currentstock), "3m")}> 3M </button>
                            <button onClick={() => this.stockFetch((this.state.currentstock), "1y")}> 1Y </button>
                            <button onClick={() => this.stockFetch((this.state.currentstock), "5y")}> 5Y </button>
                        </div>
                    </div>
                    <div className="stock-show-trade-box">
                        <div className="stock-show-trade-box-top">Buy {stockName}</div>
                        <div className="stock-show-trade-box-middle-1">
                            <div className="sstbm1-1">
                                <div>Order Type</div>
                                <div>Market Order</div>
                            </div>
                            <div className="sstbm1-2">
                                <div>Invest In</div>
                                <div>Dollars</div>
                            </div>
                            <div className="sstbm1-3">
                                <div>Amount</div>
                                <div>
                                    <input type="text" 
                                    onChange={(e) => this.handleChangeShares(e)}
                                    placeholder='0'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="stock-show-trade-box-middle-2"></div>
                            <div>
                                <div>Est. Quantity</div>
                                <div>Estimated Cost: {this.state.cost}</div>
                            </div>
                            <div>
                                <button>Review Order</button>
                            </div>
                        <div className="stock-show-trade-box-bottom">
                            <div>Buying power ${balance} available</div>
                        </div>
                    </div>
                </div>

            </div>
            
        );
    }

}

export default StockShow;
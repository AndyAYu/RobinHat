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
        this.reviewOrder = this.reviewOrder.bind(this);
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
                this.setState({ current_price: closeValues[closeValues.length-1] })
            })
    }

    reviewOrder(){
        let amount = this.state.stock_quantity
        let userId = this.props.userId
        let {ticker} = this.props
        let { current_price } = this.state
        this.props.updateUserStockInfo(userId, ticker, amount, current_price)
    }

    handleChangeShares(event) {
        const amount = event.target.value
        const current_price = this.state.current_price
        this.calculator(current_price, amount)
    }
    
    calculator(current_price, amount=null){
        const max_quant = (this.props.balance % current_price )
        const cost = (current_price * amount).toFixed(2)
        const balance_result = (this.state.balance_remaining - cost).toFixed(2)
        if (amount >= max_quant){
            this.setState({ stock_quantity: amount, cost: cost, balance_remaining: 0})            
        }else if (amount <= 0 || amount === null){
            this.setState({ stock_quantity: amount, cost: 0, balance_remaining: this.props.balance})
        }else{
            this.setState({ stock_quantity: amount, cost:cost, balance_remaining: balance_result })
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
                            <button onClick={() => this.stockFetch((this.props.ticker), "1d")}> 1D </button>
                            <button onClick={() => this.stockFetch((this.props.ticker), "5d")}> 1W </button>
                            <button onClick={() => this.stockFetch((this.props.ticker), "1m")}> 1M </button>
                            <button onClick={() => this.stockFetch((this.props.ticker), "3m")}> 3M </button>
                            <button onClick={() => this.stockFetch((this.props.ticker), "1y")}> 1Y </button>
                            <button onClick={() => this.stockFetch((this.props.ticker), "5y")}> 5Y </button>
                        </div>
                    </div>
                    <div className="stock-show-trade-box">
                        <div className="stock-show-trade-box-top">Buy {stockName}</div>
                        <div className="stock-show-trade-box-middle-1">
                            <div className="sstbm1-1">
                                <div><p>Order Type</p></div>
                                <div><p>Market Order</p></div>
                            </div>
                            <div className="sstbm1-2">
                                <div><p>Invest In</p></div>
                                <div><p>Dollars</p></div>
                            </div>
                            <div className="sstbm1-3">
                                <div>Amount</div>
                                <div>
                                    <input 
                                    className="stockInputAmount"
                                    type="text" 
                                    onChange={(e) => this.handleChangeShares(e)}
                                    placeholder='0'
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="stock-show-trade-box-middle-2"></div>
                            <div>
                                <div className="sstbm2-estq">Est. Quantity</div>
                                <div className="sstbm2-estc">Estimated Cost: {this.state.cost}</div>
                            </div>
                            <div>
                                <button className="review-order-button" onClick={() => {this.reviewOrder()}}>Review Order</button>
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
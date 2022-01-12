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
import stockNames from '../../../util/all_stock_ticker_and_name';


// in LineChart-want to make path endpoint and Link.name more dynamic.
// ${data.dataset.label} < wrong reference???

// for stocks on the right side >> button onclick invoke defined function??

class LineChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            currentprices: '',
            newobj: {
                labels: [],
                datasets: []
            },
            stonks: ['AMD', 'AAPL', 'GOOGL', 'FB', 'NFLX', 'TWTR', 'TSLA', 'MSFT', 'SBUX', 'GE', 'SUN'],
        }
        this.stockFetch = this.stockFetch.bind(this);
        this.currentStockPriceFetch = this.currentStockPriceFetch.bind(this);
    };

    componentDidMount(){
        this.currentStockPriceFetch(this.state.stonks)
    }



    //handleclick-make fetch for stock and also setstate./

    stockFetch(stock, time="1d") {
        fetch(`https://cloud.iexapis.com/stable/stock/${stock}/chart/${time}?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
            .then(response => response.json())
            .then(data => {
                let obj = data;
                let closeValues = obj.map((p) => p.close);
                let closeDates = obj.map((d) => d.date);
                let stockName = stockNames[stock];
                let color = (closeValues[(closeValues.length - 1)] > closeValues[0]) ? 'rgb(37, 202, 4)' : 'rgb(255, 80, 1)';
                let newobj = {
                    labels: closeDates,
                    datasets: [
                        {
                            label: stockName,
                            data: closeValues,

                            borderColor: color,
                            backgroundColor: color,
                            pointRadius: 1,
                            pointHoverRadius: 1,
                        }
                    ],
                };
                this.setState({ newobj })
                // .then(() => console.log(newobj))
            })
        // })
    }

    currentStockPriceFetch(stocks) {
        let joinedStocks = stocks.join(',')
        fetch(`https://cloud.iexapis.com/v1/stock/market/batch?&types=price&symbols=${joinedStocks}&token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        .then(response => response.json())
        .then(data => {
            debugger
            this.setState(() => ({currentprices: data}) )
        })
    }

    render(){
        if (Object.values(this.state.currentprices).length < 1) {return null}
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
            responsive: true,
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
        debugger
    return (
        <div className="stockpage">
            <div className="stockpageleft">
                Portfolio Value
                Portfolio Performance
                <div className="chart-box">
                    <Line
                    data={this.state.newobj}
                    options={options}
                    height={350}
                    width={500}
                    />
                </div>
                <div>
                    <button> 1D </button>
                    <button> 1W </button>
                    <button> 1M </button>
                    <button> 3M </button>
                    <button> 1Y </button>
                    <button> ALL </button>
                </div>
                </div>
            <div className="watchlist">
                <div className="watchlist-box">
                    <p>Watchlist</p>
                    <div className="watchlist-stocks">
                        <div>
                            <Link to={`/stock/amd`} onClick={() => this.stockFetch('AMD')} id="amd-stock-button" >{this.state.stonks[0]}</Link>
                            <div className="current-stock-price" >{this.state.currentprices.AMD.price}</div>
                            <div>
                            {this.state.pricechangepercentage}
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/aapl`} onClick={() => this.stockFetch('AAPL')}>{this.state.stonks[1]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.AAPL.price}</div>
                            Percentage Change
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/googl`} onClick={() => this.stockFetch('GOOGL')}>{this.state.stonks[2]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.GOOGL.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/fb`} onClick={() => this.stockFetch('FB')}>{this.state.stonks[3]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.FB.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/nflx`} onClick={() => this.stockFetch('NFLX')}>{this.state.stonks[4]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.NFLX.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/twtr`} onClick={() => this.stockFetch('TWTR')}>{this.state.stonks[5]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.TWTR.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/tsla`} onClick={() => this.stockFetch('TSLA')}>{this.state.stonks[6]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.TSLA.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/msft`} onClick={() => this.stockFetch('MSFT')}>{this.state.stonks[7]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.MSFT.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/sbux`} onClick={() => this.stockFetch('SBUX')}>{this.state.stonks[8]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.SBUX.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/ge`} onClick={() => this.stockFetch('GE')}>{this.state.stonks[9]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.GE.price}</div>
                        </div>
                        <div>
                            <Link to={`/stock/sun`} onClick={() => this.stockFetch('SUN')}>{this.state.stonks[10]}</Link>
                            <div className="-current-stock-price" >{this.state.currentprices.SUN.price}</div>
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

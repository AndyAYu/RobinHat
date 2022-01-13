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
            currentstock: '',
            currentprices: '',
            newobj: {
                labels: [],
                datasets: []
            },
            smallobj: {
                datasets:[]
            },
            stonks: ['AMD', 'AAPL', 'GOOGL', 'FB', 'NFLX', 'TWTR', 'TSLA', 'MSFT', 'SBUX', 'GE', 'SUN'],
        }
        this.stockFetch = this.stockFetch.bind(this);
        this.currentStockPriceFetch = this.currentStockPriceFetch.bind(this);
        this.percentChange = this.percentChange.bind(this);
    };

    componentDidMount(){
        this.currentStockPriceFetch(this.state.stonks)
    }

    //handleclick-make fetch for stock and also setstate./

    stockFetch(stock, time="1y") {
        fetch(`https://cloud.iexapis.com/stable/stock/${stock}/chart/${time}?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
            .then(response => response.json())
            .then(data => {
                let obj = data;
                // debugger
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
                this.setState(() => ({ currentstock: stock}))
                // .then(() => console.log(newobj))
            })
        // })
    }

    currentStockPriceFetch(stocks) {
        let joinedStocks = stocks.join(',')
        fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${joinedStocks}&range=intraday-prices%20&token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        .then(response => response.json())
        .then(data => {
            // debugger
            this.setState(() => ({currentprices: data}) )
        });
        // fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${joinedStocks}&range=1d%20&token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        // .then(response => response.json())
        // .then(data => {
            // debugger
        //     let obj = data;
        //     let closeValues = stocks.map((s) => obj.s.close)
        //     debugger
        //     let color = (closeValues[(closeValues.length - 1)] > closeValues[0]) ? 'rgb(37, 202, 4)' : 'rgb(255, 80, 1)';
        //     let smallobj = {
        //         labels: closeTime,
        //         datasets: [
        //             {
        //                 data: closeValues,

        //                 borderColor: color,
        //                 backgroundColor: color,
        //                 pointRadius: .5,
        //                 pointHoverRadius: .5,
        //             }
        //         ],
        //     };
        //     this.setState({ smallobj })
        // });
    }
    //open 100 close 90
    percentChange(open,close) {
        let pricediff = (close - open)
        let percentdiff = ((pricediff)/open) * 100
        // debugger
        if (pricediff < 0) 
        {return `${percentdiff}`.slice(0,4)}
        else {return `+${percentdiff}`.slice(0,4)};
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
        // debugger
    return (
        <div className="stockpage">
            <div className="stockpageleft">
                <div>
                    <h2>
                        Portfolio Value
                    </h2>
                    <h2>
                    Portfolio Performance
                </h2>
                </div>
                <div className="chart-box">
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
                <div className="stock-page-news">
                    <div>NEWS</div>
                    <div className="appleNews">
                    <a href="https://cloud.iexapis.com/v1/news/article/3so4uJVfpeUnLQ5izkVmPhSTv2xY1a6F50TEmxdn0yt4">
                        <img src=" https://cloud.iexapis.com/v1/news/image/3so4uJVfpeUnLQ5izkVmPhSTv2xY1a6F50TEmxdn0yt4" alt="applenews" width="150"  height="100"/>
                    </a>
                    </div>
                </div>
                </div>
            <div className="watchlist">
                <div className="watchlist-box">
                    <div>Watchlist</div>
                    <div className="watchlist-stocks">
                        <div>
                            <Link to={`/stock/amd`} onClick={() => this.stockFetch('AMD')} id="amd-stock-button" >{this.state.stonks[0]}</Link>
                            {/* <section><Line
                            data={this.state.smallobj}
                            options={options}
                            height={30}
                            width={60}
                            /></section> */}
                            <div>
                                <div className="current-stock-price" >{this.state.currentprices.AMD.chart[0].close}</div>
                                <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.AMD.chart[0].open),(this.state.currentprices.AMD.chart[0].close))}%    
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/aapl`} onClick={() => this.stockFetch('AAPL')}>{this.state.stonks[1]}</Link>
                            <div>
                                <div className="-current-stock-price" >{this.state.currentprices.AAPL.chart[0].close}</div>
                                {this.percentChange((this.state.currentprices.AAPL.chart[0].open), (this.state.currentprices.AAPL.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/googl`} onClick={() => this.stockFetch('GOOGL')}>{this.state.stonks[2]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.GOOGL.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.GOOGL.chart[0].open), (this.state.currentprices.GOOGL.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/fb`} onClick={() => this.stockFetch('FB')}>{this.state.stonks[3]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.FB.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.FB.chart[0].open), (this.state.currentprices.FB.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/nflx`} onClick={() => this.stockFetch('NFLX')}>{this.state.stonks[4]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.NFLX.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.NFLX.chart[0].open), (this.state.currentprices.NFLX.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/twtr`} onClick={() => this.stockFetch('TWTR')}>{this.state.stonks[5]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.TWTR.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.TWTR.chart[0].open), (this.state.currentprices.TWTR.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/tsla`} onClick={() => this.stockFetch('TSLA')}>{this.state.stonks[6]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.TSLA.chart[0].close}</div>
                                {this.percentChange((this.state.currentprices.TSLA.chart[0].open), (this.state.currentprices.TSLA.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/msft`} onClick={() => this.stockFetch('MSFT')}>{this.state.stonks[7]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.MSFT.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.MSFT.chart[0].open), (this.state.currentprices.MSFT.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/sbux`} onClick={() => this.stockFetch('SBUX')}>{this.state.stonks[8]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.SBUX.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.SBUX.chart[0].open), (this.state.currentprices.SBUX.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/ge`} onClick={() => this.stockFetch('GE')}>{this.state.stonks[9]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.GE.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.GE.chart[0].open), (this.state.currentprices.GE.chart[0].close))}%
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/sun`} onClick={() => this.stockFetch('SUN')}>{this.state.stonks[10]}</Link>
                            <div>
                            <div className="-current-stock-price" >{this.state.currentprices.SUN.chart[0].close}</div>
                            {this.percentChange((this.state.currentprices.SUN.chart[0].open), (this.state.currentprices.SUN.chart[0].close))}%
                            </div>
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

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
import NewsArticle from '../../news_articles/news_article';


// in LineChart-want to make path endpoint and Link.name more dynamic.
// ${data.dataset.label} < wrong reference???

// for stocks on the right side >> button onclick invoke defined function??

class LineChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // active: false,
            currentstock: '',
            currentprices: '',
            newobj: {
                labels: [],
                datasets: []
            },
            smallobj: {
                datasets:[]
            },
            stonks: this.props.stocks,
            // stonks: ["AMD"],
        }
        this.currentStockPriceFetch = this.currentStockPriceFetch.bind(this);
        this.percentChange = this.percentChange.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
    };

    componentDidMount(){
        this.currentStockPriceFetch(this.state.stonks)
    }

    toggleActive() {
        const targetElement = document.getElementsByClassName("watchlist-stock")
        if (targetElement[0].style.display === "none") {
            targetElement[0].style.display = "flex";
        } else {
            targetElement[0].style.display = "none";
        }
    }
    //handleclick-make fetch for stock and also setstate./

    // stockFetch(stock, time="1y") {
    //     debugger
        // fetch(`https://cloud.iexapis.com/stable/stock/${stock}/chart/${time}?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        //     .then(response => response.json())
        //     .then(data => {
        //         let obj = data;
        //         // debugger
        //         let closeValues = obj.map((p) => p.close);
        //         let closeDates = obj.map((d) => d.date);
        //         let stockName = stockNames[stock];
        //         let color = (closeValues[(closeValues.length - 1)] > closeValues[0]) ? 'rgb(37, 202, 4)' : 'rgb(255, 80, 1)';
        //         let newobj = {
        //             labels: closeDates,
        //             datasets: [
        //                 {
        //                     label: stockName,
        //                     data: closeValues,

        //                     borderColor: color,
        //                     backgroundColor: color,
        //                     pointRadius: 1,
        //                     pointHoverRadius: 1,
        //                 }
        //             ],
        //         };
        //         this.setState({ newobj })
        //         this.setState(() => ({ currentstock: stock}))
        //         // .then(() => console.log(newobj))
        //     })
        // })
    // }=

    currentStockPriceFetch(stocks) {
        debugger
        let joinedStocks = null || stocks.join(',')
        fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${joinedStocks}&range=intraday-prices%20&token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.setState(() => ({currentprices: data}) )
            // debugger
        });
    }
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

    return (
        <div className="stockpage">
            <div className="stockpageleft">
                {/* <div>
                    <h2>
                        {portfolioValue}
                    </h2>
                    <h2>
                    Portfolio Performance
                </h2>
                </div> */}
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
                <div>
                    <NewsArticle />
                </div>
            </div>
            <div className="watchlist">
                <div className="watchlist-box">
                    <div className="watchlist-stocks">
                    <button className="watchlist-header" onClick={this.toggleActive} >Watchlist</button>

                        {/* <div className="watchlist-stock">
                            <Link to={`/stock/amd`}>
                                {this.state.stonks[0]}
                            </Link>
                            <div>
                                <div className="-current-stock-price" >
                                    ${this.state.currentprices.AMD.chart[0].close}
                                </div>
                                <div className="percentageChange1">
                                    {this.percentChange((this.state.currentprices.AMD.chart[0].open),
                                    (this.state.currentprices.AMD.chart[0].close))}%    
                                </div>
                            </div>
                        </div> */}

                        <div className="watchlist-stock">
                        {this.state.stonks.map(ticker,i => (
                            <div className="wls-stocks"key={ticker} > 
                                <Link to={`/stock/${ticker}`}>
                                {ticker}
                                </Link>
                                <div >
                                    <div className="-current-stock-price" >
                                        ${this.state.currentprices.AMD.chart[0].close}
                                    </div>
                                    <div className="percentageChange1">
                                        {this.percentChange((this.state.currentprices.AMD.chart[0].open),
                                        (this.state.currentprices.AMD.chart[0].close))}%    
                                    </div>
                                </div>
            
                            </div>
                        ))}
                        </div>

                        {/* <div>
                            <Link to={`/stock/aapl`}>{this.state.stonks[1]}</Link>
                            <div>
                                <div className="-current-stock-price" >${this.state.currentprices.AAPL.chart[0].close}</div>
                                <div className="percentageChange1">
                                    {this.percentChange((this.state.currentprices.AAPL.chart[0].open), (this.state.currentprices.AAPL.chart[0].close))}%
                                </div>
                            </div>
                        </div> */}
                        {/* <div>
                            <Link to={`/stock/googl`} >{this.state.stonks[2]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.GOOGL.chart[0].close}</div>
                                <div className="percentageChange1">
                                    {this.percentChange((this.state.currentprices.GOOGL.chart[0].open), (this.state.currentprices.GOOGL.chart[0].close))}%
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/fb`} >{this.state.stonks[3]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.FB.chart[0].close}</div>
                                <div className="percentageChange1">
                                    {this.percentChange((this.state.currentprices.FB.chart[0].open), (this.state.currentprices.FB.chart[0].close))}%
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/nflx`} >{this.state.stonks[4]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.NFLX.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.NFLX.chart[0].open), (this.state.currentprices.NFLX.chart[0].close))}%
                            </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/twtr`} >{this.state.stonks[5]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.TWTR.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.TWTR.chart[0].open), (this.state.currentprices.TWTR.chart[0].close))}%
                            </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/tsla`} >{this.state.stonks[6]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.TSLA.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.TSLA.chart[0].open), (this.state.currentprices.TSLA.chart[0].close))}%
                            </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/msft`} >{this.state.stonks[7]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.MSFT.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.MSFT.chart[0].open), (this.state.currentprices.MSFT.chart[0].close))}%
                            </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/sbux`} >{this.state.stonks[8]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.SBUX.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.SBUX.chart[0].open), (this.state.currentprices.SBUX.chart[0].close))}%
                            </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/ge`} >{this.state.stonks[9]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.GE.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.GE.chart[0].open), (this.state.currentprices.GE.chart[0].close))}%
                            </div>
                            </div>
                        </div>
                        <div>
                            <Link to={`/stock/sun`} >{this.state.stonks[10]}</Link>
                            <div>
                            <div className="-current-stock-price" >${this.state.currentprices.SUN.chart[0].close}</div>
                            <div className="percentageChange1">
                                {this.percentChange((this.state.currentprices.SUN.chart[0].open), (this.state.currentprices.SUN.chart[0].close))}%
                            </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        
        </div>
    )
}
}

export default LineChart;

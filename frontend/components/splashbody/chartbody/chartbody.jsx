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

class LineChart extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            // active: false,
            currentstock: '',
            currentprices: '',
            combinedNews: [],
            newobj: {
                labels: [],
                datasets: []
            },
            smallobj: {
                datasets:[]
            },
        }
        this.currentStockPriceFetch = this.currentStockPriceFetch.bind(this);
        this.percentChange = this.percentChange.bind(this);
        this.toggleActive = this.toggleActive.bind(this);
        this.randomRelevantNewsArticles = this.randomRelevantNewsArticles.bind(this);
    };

    componentDidMount(){
        this.currentStockPriceFetch(this.props.stocks)
        this.portfolioFetch(this.props.stocks)
    }

    componentWillUnmount(){
        this.portfolioFetch(this.props.stocks)
    }

    toggleActive() {
        const targetElement = document.getElementsByClassName("watchlist-stock")
        if (targetElement[0].style.display === "none") {
            targetElement[0].style.display = "flex";
        } else {
            targetElement[0].style.display = "none";
        }
    }

    randomRelevantNewsArticles(combinedNews) {
        let newsArray = [];
        combinedNews.forEach(e => {
            if (e.length!==0){newsArray.push(e[0],e[1])}
        })
        this.setState({combinedNews:newsArray})
    }

    portfolioFetch(stocks=null, time="1m") {
        if (stocks == null) {return null};
        const joinedStocks = stocks.join(',')
        // fetch(`https://cloud.iexapis.com/stable/stock/${stock}/chart/${time}?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        // fetch(`https://cloud.iexapis.com/stable/stock/market/batch?symbols=${joinedStocks}&types=quote,news,chart&range=1m&last=5?token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        fetch(`https://cloud.iexapis.com/v1/stock/market/batch?symbols=${joinedStocks}&types=news,chart&range=${time}&token=pk_3e9931bb69894a0695a654b8e9715d4c`)
            .then(response => response.json())
            .then(data => {
                let obj = data;
                let newsObj = [];
                let dataAvgValues = new Array(1955).fill(0)
                Object.values(obj).forEach((value) => { //values reflects # of stocks 
                    dataAvgValues = dataAvgValues.slice(0,(value.chart.length))
                    newsObj.push(value.news)
                    this.setState({combinedNews:newsObj})
                    value.chart.forEach((e,index) => { //every values has one chart and hundreds of e 
                        dataAvgValues[index] += e.average||e.marketAverage||e.close
                        return dataAvgValues
                    })
                });
                this.randomRelevantNewsArticles(this.state.combinedNews)
                const finalChartValues = dataAvgValues.map(e => e+=this.props.balance);
                let chartDate = Object.values(obj)[0].chart.map(e => e.label);
                let color = (finalChartValues[(finalChartValues.length - 1)] > finalChartValues[0]) ? 'rgb(37, 202, 4)' : 'rgb(255, 80, 1)';
                let newobj = {
                    labels: chartDate,
                    datasets: [
                        {
                            label: [],
                            data: finalChartValues,

                            borderColor: color,
                            backgroundColor: color,
                            pointRadius: 1,
                            pointHoverRadius: 1,
                        }
                    ],
                };
                this.setState({ newobj })
            })
    }

    currentStockPriceFetch(stocks) {
        let joinedStocks = null || stocks.join(',')
        fetch(`https://cloud.iexapis.com/v1/stock/market/batch?types=chart&symbols=${joinedStocks}&range=intraday-prices%20&token=pk_3e9931bb69894a0695a654b8e9715d4c`)
        .then(response => response.json())
        .then(data => {
            this.setState(() => ({currentprices: data}) )
        });
    }
    percentChange(open,close) {
        let pricediff = (close - open)
        let percentdiff = ((pricediff)/open) * 100
        if (pricediff < 0) 
        {return `${percentdiff}`.slice(0,4)}
        else {return `+${percentdiff}`.slice(0,4)};
    }
    
    render(){
        console.log(this.state.combinedNews)
        if (Object.values(this.state.currentprices).length < 1) {return null}
        let options = {   
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
                    display: false,
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
                    },
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
                <div className="chart-box">
                        <Line
                        data={this.state.newobj}
                        options={options}
                        height={550}
                        width={1000}
                        />
                </div>
                <div className="chart-box-buttons">
                    {/* <button onClick={() => this.stockFetch((this.state.currentstock), "1d")}> 1D </button> */}
                    <button onClick={() => this.portfolioFetch((this.props.stocks), "1w")}> 1W </button>
                    <button onClick={() => this.portfolioFetch((this.props.stocks), "1m")}> 1M </button>
                    <button onClick={() => this.portfolioFetch((this.props.stocks), "3m")}> 3M </button>
                    <button onClick={() => this.portfolioFetch((this.props.stocks), "1y")}> 1Y </button>
                    <button onClick={() => this.portfolioFetch((this.props.stocks), "5y")}> 5Y </button>
                </div>
                <div className="chartBody-BuyPower">
                    <div>Buying Power</div>
                    <div>${this.props.balance}</div>
                </div>
                <div className="newsArticleRows">
                    <div>{this.state.combinedNews.map((e,index) =>(
                        <a href={e.url}className="newsIndividualRow"key={index}>
                            <div className="newsTextArea">
                                <div className="newsHeadLines">"{e.headline}"</div>
                                <div className="newsSummaries"><p>{e.summary}</p></div>
                                <div><p>{e.source}</p></div>
                            </div>
                            <img className="newsImages" src={e.image} />  
                        </a>
                        ))}
                    </div>
                </div>
            </div>
            <div className="watchlist">
                <div className="watchlist-box">
                    <div className="watchlist-stocks">
                    <button className="watchlist-header" onClick={this.toggleActive} >Stocklist</button>
                        <div className="watchlist-stock">
                        {this.props.stocks.map(ticker => (
                            <Link className="wls-stocks" to={`/stock/${ticker}`} key={ticker} >
                                <div>{ticker}</div>
                                <div>
                                    <div className="-current-stock-price" >
                                        ${this.state.currentprices[ticker].chart[0].close}
                                    </div>
                                    <div className="percentageChange1">
                                        {this.percentChange((this.state.currentprices[ticker].chart[0].open),
                                        (this.state.currentprices[ticker].chart[0].close))}%    
                                    </div>
                                </div>
                            </Link>
                        ))}
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}
}

export default LineChart;

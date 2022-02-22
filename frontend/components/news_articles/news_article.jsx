import React from "react";

class NewsArticle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            headlines: [],
            summarys: [],
            images: [],
            urls: [],
        }
        this.organizeNews = this.organizeNews.bind(this);
    }

    componentDidMount() {
    }

    async organizeNews(){
        const headlines = this.props.combinedNews.map(e => e[0].headline)
        const summarys = this.props.combinedNews.map(e => e[0].summary)
        const images = this.props.combinedNews.map(e => e[0].image)
        const urls = this.props.combinedNews.map(e => e[0].url)
        await this.setState({headlines: 1,summarys,images,urls})
    }

    render() {
        return(
            // <div className="stock-page-news">
            //     <div className="news" >NEWS
            //     </div>
            //         <div className="news-articles">
            //             <div>
            //             <p>Is It Time To Sell Apple After Stock Pulls Back From All-Time Highs?</p>
            //             <span>
            //                 Apple Inc (NASDAQ: AAPL ) briefly traded at all-time highs to start the year before pulling back with the overall markets. Having bounced off the lows over the past two days, is it time to head for the exits? A lot of growth and technology stocks are still trading \"at valuations that don''t make sense for their growth prospects,\" Gilman Hill Asset Management''s Jenny Harrington said Wednesday on CNBC''s \"Fast Money Halftime Report.\" Apple''s earnings
            //             </span>
            //             </div>
            //         <a href="https://cloud.iexapis.com/v1/news/article/3so4uJVfpeUnLQ5izkVmPhSTv2xY1a6F50TEmxdn0yt4">
            //             <img src=" https://cloud.iexapis.com/v1/news/image/3so4uJVfpeUnLQ5izkVmPhSTv2xY1a6F50TEmxdn0yt4" alt="applenews" width="200"  height="150"/>
            //         </a>
            //         </div>

            //         <div className="news-articles">
            //             <div>
            //             <p>The Best Drone Stocks For Today  And The Future</p>
            //             <span>
            //                 Drone stocks are on the rise as the military invests in new drone platforms and the FAA establishes rules for commercial drones,
            //                 opening up the possibility of drone delivery services.
            //             </span>
            //             </div>
            //         <a href="https://cloud.iexapis.com/v1/news/article/SI3Nf5BKP9QQnIKxf0d23jrSkZkeY64pQBSWDK86HG2">
            //             <img src="https://cloud.iexapis.com/v1/news/image/w6YSgkBXcbZVBprTarCi37xgqsF2bvFazoCX83UKNpn" alt="googlnews" width="200" height="150"/>
            //         </a>
            //         </div>

            //         <div className="news-articles">
            //             <div>
            //             <p>The Antitrust Case Against Facebook Draws Blood</p>
            //             <span>ON TUESDAY, FEDERAL judge James E. Boasberg ruled that the Federal Trade Commission’s effort to break up Facebook could move forward.
            //                 The case itself is far from decided. But by blessing the FTC’s theory that a monopoly can harm consumers even when its product is free,
            //                 the judge has signaled that Facebook—and other tech platforms—are not invincible.</span>    
            //             </div>
            //         <a href="https://cloud.iexapis.com/v1/news/article/2p2qFZLAqjQIHQH298w0IuUpNm6gmLuNrQv8yo9Mx78z">
            //             <img src=" https://cloud.iexapis.com/v1/news/image/2p2qFZLAqjQIHQH298w0IuUpNm6gmLuNrQv8yo9Mx78z" alt="fbnews" width="200" height="150" />
            //         </a>
            //         </div>
            // </div>
        )
    }
}
        
export default NewsArticle;
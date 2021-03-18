import React from 'react'
// import Card from './Card'
import '../assets/css/news.css'
import CardNews from './CardNews'

const News = () => {
    const dataNews = [
        {
            title: "Juara 1 Hackathon",
            desc:"kampus ini telah mejuarai lomba"
        },
        {
            title: "TAK Terbanyak",
            desc:"kampus ini telah mejuarai lomba"
        },
        {
            title: "Kampus No 1",
            desc:"kampus ini telah mejuarai lomba"
        },
    ]
    return (
        <div>
            <h1>News</h1>
            <div className="news">
                {
                    dataNews.map((data) => (
                        <CardNews title={data.title} desc={data.desc} />
                    ))
                }                

            </div>
        </div>
    )
}

export default News

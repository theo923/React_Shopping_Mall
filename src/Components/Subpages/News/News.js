import React, { useEffect, useState } from 'react'
import { NewsCard } from './NewsCard'

const News = ({handleSCChange}) => {
    const [newslist, setNewsList] = useState([])

    useEffect(() => {
        fetch('https://enigmatic-mesa-83961.herokuapp.com/newslist', {
            method: 'post',
            headers: {'Content-Type': 'applicaiton/json'},
            body: JSON.stringify({
                username: ''
            })
        })
        .then(res => res.json())
        .then(data => {console.log(data);setNewsList(data)})
    }, [handleSCChange])

    return(
            <div>
                {newslist.map((news, Idx) => <NewsCard key={Idx} news={news} handleSCChange={handleSCChange} />)}
            </div>
    )
}

export default News;
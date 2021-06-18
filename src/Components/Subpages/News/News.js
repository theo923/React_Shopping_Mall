import React from 'react'
import { NewsCard } from './NewsCard'
import { NewsList } from './NewsList'

export const News = ({handleSCChange}) => {

    return(
            <div>
                {NewsList.map((news, Idx) => <NewsCard key={Idx} news={news} handleSCChange={handleSCChange} />)}
            </div>
    )
}
import React from 'react'

export const NewsCard = ({ news, handleSCChange }) => {
    const {newsImage, newsHeading, newsContent, newsItem} = news

    return(
            <div>
                <div className="card glass lg:card-side text-neutral-content mb-6">
                    <figure className="p-6">
                        <img src={newsImage} style={{width:'444.44px', height:'250px'}} alt={newsHeading} className="rounded-lg shadow-lg" />
                    </figure> 
                    <div className="card-body max-h-full max-w-full">
                        <h2 className="card-title">{newsHeading}</h2> 
                        <p>{newsContent}</p> 
                        <div className='justify-end space-x-2 card-actions'>
                                <button name={newsItem} id='add' onClick={handleSCChange} className="btn glass rounded-full" >Add to Shopping Cart</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
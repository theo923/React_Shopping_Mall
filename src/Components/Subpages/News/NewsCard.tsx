import * as React from 'react'

type NewsCardProps = {
    news: any
    handleSCChange(e: object): void;
}

export const NewsCard = ({ news, handleSCChange } : NewsCardProps) : JSX.Element => {
    const {newsimage, newsheading, newscontent, newsitem} = news

    return(
            <div>
                <div className="card glass lg:card-side text-neutral-content mb-6">
                    <figure className="p-6">
                        <img src={newsimage} style={{width:'444.44px', height:'250px'}} alt={newsheading} className="rounded-lg shadow-lg" />
                    </figure> 
                    <div className="card-body max-h-full max-w-full">
                        <h2 className="card-title">{newsheading}</h2> 
                        <p className=' h-32'>{newscontent}</p> 
                        <div className='justify-end space-x-2 card-actions'>
                                <button name={newsitem} id='add' onClick={e => handleSCChange(e)} className="btn glass rounded-full" >Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}
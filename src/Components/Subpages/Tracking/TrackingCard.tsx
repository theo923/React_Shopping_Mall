import * as React from 'react'

interface ITrackingCardProps {
    order: any;
    idx: number;
    handleViewDetail(ordernumber: number): void;
}

export const TrackingCard : React.FC<ITrackingCardProps> = ({ order, idx, handleViewDetail }) => {
    const orderedItem = order[0]

    return(
            <div >
                <div>
                    <div className="card glass lg:card-side text-neutral-content mb-6">
                        <figure className="p-6 lg:py-0 mb-8">
                            <div style={{width:'266.67px', height:'150px'}}>
                                <img src={orderedItem[0].url} alt={orderedItem[0].name}/>
                            </div>
                        </figure> 
                        <div className="card-body max-h-full max-w-full">
                            <h2 className="card-title">Order #{idx}</h2> 
                            <div>{orderedItem.map((item: any, idx: number) => <div key={idx} className='italic'>{item.name} ${item.quan * item.price} @ {item.quan} </div>)}</div> 
                            <div className='justify-end space-x-2 card-actions'>
                                    <button onClick={() => handleViewDetail(idx)} className="btn glass rounded-full" >Click for detailed info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
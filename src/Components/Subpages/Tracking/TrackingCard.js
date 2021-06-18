import React from 'react'

export const TrackingCard = ({ order, idx, setOrderView, setOrderNum }) => {
    const orderedItem = order[0]
    console.log(orderedItem)

    return(
            <div >
                <div>
                    <div className="card glass lg:card-side text-neutral-content mb-6">
                        <figure className="p-6 lg:py-0 mb-8">
                            <div style={{width:'266.67px', height:'150px'}}>
                                <img src={orderedItem[0].itemImage} alt={orderedItem[0].itemDescription}/>
                            </div>
                        </figure> 
                        <div className="card-body max-h-full max-w-full">
                            <h2 className="card-title">Order #{idx}</h2> 
                            <div>{orderedItem.map(item => <div className='italic'>{item.itemDescription} ${item.attemptQuantity * item.itemPrice} @ {item.attemptQuantity} </div>)}</div> 
                            <div className='justify-end space-x-2 card-actions'>
                                    <button onClick={() => { setOrderView(true); setOrderNum(idx) }} className="btn glass rounded-full" >Click for detailed info</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
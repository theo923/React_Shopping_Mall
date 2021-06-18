import React from 'react'
import { CheckoutInfo } from '../ShoppingCart/Checkout/CheckoutInfo'
import { CheckoutItem } from '../ShoppingCart/Checkout/CheckoutItem'

export const DetailedTracking = ({ order, idx }) => {
    const orderedItem = order[0]
    const orderedDeliveryInfo = order[1]
    return(
        <div>
            <div>
                <div className="container glass text-neutral-content mb-6">
                    <figure className="px-6 relative">
                        <div style={{width:'266.67px', height:'150px'}} className="float-right">
                            <img src={orderedItem[0].itemImage} alt={orderedItem[0].itemDescription} />
                        </div>
                    </figure> 
                    <div className="card-body max-h-full max-w-full relative">
                        <h2 className="card-title">Order #{idx}</h2> 
                        <div>{orderedItem.map(item => <div className='italic'>{item.itemDescription} ${item.attemptQuantity * item.itemPrice} @ {item.attemptQuantity} </div>)}</div> 
                    </div>
                </div>
            </div>
            <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Quantity</th> 
                            <th>Item Description</th> 
                            <th>Price</th>
                        </tr>
                    </thead> 
                {orderedItem.map((cartItem, idx) => <CheckoutItem key={idx} cartItem={cartItem} />)}
                    <tbody>
                        <tr>
                            <th></th> 
                            <th>Price to Pay</th> 
                            <th>123</th>
                        </tr>
                    </tbody> 
            </table>

            <table className="table w-full">
                <CheckoutInfo key={idx} eachInfo={orderedDeliveryInfo} />
            </table>
        </div>

        
    )
}
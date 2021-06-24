import * as React from 'react'
import { CheckoutInfo } from '../ShoppingCart/Checkout/CheckoutInfo'
import { CheckoutItem } from '../ShoppingCart/Checkout/CheckoutItem'

interface ITrackingProps {
    order: any;
    idx: number;
}

export const DetailedTracking : React.FC<ITrackingProps> = ({ order, idx }) => {
    const reducer = (accumulator : number, currentObject: any) => accumulator + (currentObject.quan * currentObject.price);
    const orderedItem = order[0]
    const orderedDeliveryInfo = order[1]
    return(
        <div>
            <div>
                <div className="container glass text-neutral-content mb-6">
                    <figure className="px-6 relative">
                        <div style={{width:'266.67px', height:'150px'}} className="float-right">
                            <img src={orderedItem[0].url} alt={orderedItem[0].name} />
                        </div>
                    </figure> 
                    <div className="card-body max-h-full max-w-full relative">
                        <h2 className="card-title">Order #{idx}</h2> 
                        <div>{orderedItem.map((item: any, idx: number) => <div key={idx} className='italic'>{item.name} ${item.quan * item.price} @ {item.quan} </div>)}</div> 
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
                {orderedItem.map((cartItem: any, idx: number) => <CheckoutItem key={idx} itemprice={cartItem.price} attemptquantity={cartItem.quan} itemdescription={cartItem.name} />)}
                    <tbody>
                        <tr>
                            <th></th> 
                            <th>Price to Pay</th> 
                            <th>{orderedItem.reduce(reducer, 0)}</th>
                        </tr>
                    </tbody> 
            </table>

            <table className="table w-full">
                <CheckoutInfo key={idx} eachInfo={orderedDeliveryInfo[0]} />
            </table>
        </div>

        
    )
}
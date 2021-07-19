import * as React from 'react'
import { CheckoutInfo } from '../ShoppingCart/Checkout/CheckoutInfo'
import { CheckoutItem } from '../ShoppingCart/Checkout/CheckoutItem'

interface ITrackingProps {
    order: any;
    idx: number;
    handleBack(): void;
}

export const DetailedTracking: React.FC<ITrackingProps> = ({ order, idx, handleBack }) => {
    const reducer = (accumulator: number, currentObject: any) => accumulator + (currentObject.quan * currentObject.price);
    const orderedItem = order[0]
    const orderedDeliveryInfo = order[1]
    return (
        <div>
            <div>
                <button className='btn btn-ghost btn-sm rounded-btn' onClick={() => handleBack()}>Back</button>
                <div className="container glass text-neutral-content pb-28 mb-6">
                    <figure className="flex flex-row justify-center self-center pb-6 mt-8 md:p-6 lg:py-0 mb-8 float-right" style={{ width: '266.67px', height: '150px', objectFit: 'fill' }}>
                        <img className='h-full' src={orderedItem[0].url} alt={orderedItem[0].name} />
                    </figure>
                    <div className="card-body max-h-full max-w-full relative">
                        <h2 className="card-title">Order #{idx}</h2>
                        <div>{orderedItem.map((item: any, idx: number) => <div key={idx} className='italic'>{item.name} ${item.quan * item.price} @ {item.quan} </div>)}</div>
                    </div>
                </div>
            </div>
            <div className='overflow-x-auto'>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Quan</th>
                            <th>Description</th>
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
            </div>
            <table className="table">
                <CheckoutInfo key={idx} eachInfo={orderedDeliveryInfo[0]} />
            </table>
        </div>


    )
}
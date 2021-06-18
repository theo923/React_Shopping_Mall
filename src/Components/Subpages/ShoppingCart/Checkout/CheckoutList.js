import React from 'react'
import { CheckoutItem } from './CheckoutItem'
import { CheckoutInfo } from './CheckoutInfo'
import { SuccessPage } from './SuccessPage'

export const CheckoutList = ({ userCart, reducer, handleOrder, ordered, username, handleChange, setCheckout, deliveryInfo, SwitchPages }) => {
    return(
        <div>
            { !ordered ?
            <div>
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>Quantity</th> 
                            <th>Item Description</th> 
                            <th>Price</th>
                        </tr>
                    </thead> 
                {userCart.map((cartItem, idx) => <CheckoutItem key={idx} cartItem={cartItem} />)}
                    <tbody>
                        <tr>
                            <th></th> 
                            <th>Price to Pay</th> 
                            <th>{`$${userCart.reduce(reducer, 0)}`}</th>
                        </tr>
                    </tbody> 
                </table>

                <table className="table w-full">
                    {deliveryInfo.map((eachInfo, idx) => username === eachInfo.username ? <CheckoutInfo key={idx} eachInfo={eachInfo} /> : false)}
                </table>
                
                <div className="justify-end space-x-2 card-actions">
                            <button id='drop' onClick={handleOrder} className="btn btn-success" >Order</button>
                </div>
                
            </div>
            :
            <SuccessPage username={username} handleChange={handleChange} setCheckout={setCheckout} />
            }
        </div>
    )

}

import React from 'react'
import { CheckoutItem } from './CheckoutItem'
import { CheckoutInfo } from './CheckoutInfo'
import { SuccessPage } from './SuccessPage'

export const CheckoutList = ({ userCart, reducer, handleOrder, ordered, username, handleChange, setCheckout, deliveryInfo }) => {
    console.log(userCart)
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
                {userCart.map((cartItem, idx) => <CheckoutItem key={idx} itemprice={cartItem.itemprice} attemptquantity={cartItem.attemptquantity} itemdescription={cartItem.itemdescription} />)}
                    <tbody>
                        <tr>
                            <th></th> 
                            <th>Price to Pay</th> 
                            <th>{`$${userCart.reduce(reducer, 0)}`}</th>
                        </tr>
                    </tbody> 
                </table>

                <table className="table w-full">
                    {<CheckoutInfo eachInfo={deliveryInfo} />}
                </table>
                
                <div className="justify-end space-x-2 card-actions">
                            <button name='drop' id='drop' onClick={handleOrder} className="btn btn-success" >Order</button>
                </div>
                
            </div>
            :
            <SuccessPage username={username} handleChange={handleChange} setCheckout={setCheckout} />
            }
        </div>
    )

}

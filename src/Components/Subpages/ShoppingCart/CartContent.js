import React from 'react'
import { ShoppingItem } from './ShoppingItem'
import { DeliveryForm } from './DeliveryForm'

export const CartContent = ({ reducer, setCheckout, handleSCChange, userCart, handleDeliveryInfo }) => {
    return(
        <div>        
            <div>
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                <label>
                                    <input id='checkedAll' onChange={handleSCChange} type="checkbox" className="checkbox" /> 
                                    <span className="checkbox-mark"></span>
                                </label>
                                </th> 
                                <th>Item Name</th> 
                                <th>Item Description</th> 
                                <th>Quantity</th> 
                                <th>Total</th>
                            </tr>
                        </thead> 
                    {userCart.length > 0 ? 
                    userCart.map((cartItem, idx) => <ShoppingItem key={idx} cartItem={cartItem} handleSCChange={handleSCChange} />)
                    :
                    <tbody>
                        <tr>
                            <td></td> 
                            <td>Please insert any item to the cart first</td> 
                            <td></td> 
                            <td></td> 
                            <td></td> 
                        </tr>
                    </tbody> 
                    }
                        <tbody>
                            <tr>
                                <th></th> 
                                <th></th> 
                                <th></th> 
                                <th>Total Price</th> 
                                <th>{`$${userCart.reduce(reducer, 0)}`}</th>
                            </tr>
                        </tbody> 
                    </table>
                </div>

                <DeliveryForm handleDeliveryInfo={handleDeliveryInfo} />

                <div className="justify-end space-x-2 card-actions gap-4">
                        <button id='drop' onClick={handleSCChange} className="btn btn-error" >Delete</button>
                        <button id='drop' onClick={() => (userCart.length > 0)? setCheckout(true) : null} className="btn btn-success" >Checkout</button>
                </div>

            </div>         
        </div>
    )

}

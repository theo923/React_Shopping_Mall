import * as React from 'react'
import { ShoppingItem } from './ShoppingItem'
import { DeliveryForm } from './DeliveryForm'

interface ICartContent {
    reducer(accumulator: any, currentObject: any): number;
    handleCheckout(name: string, bool: boolean) : void; 
    handleSCChange(e: object): void;
    userCart: any;
    handleDeliveryInfo(info: React.SyntheticEvent<HTMLInputElement>): void; 
    deliveryInfo: {
        Address1: string;
        Address2: string;
        county: string;
        firstName: string;
        lastName: string;
        phoneNumber: number;
        postCode: string;
        townCity: string;
        username: string;
    };
    valid: boolean;
}

export const CartContent: React.FC<ICartContent> = ({ reducer, handleCheckout, handleSCChange, userCart, handleDeliveryInfo, deliveryInfo, valid }) => {
    React.useEffect(() => {
        for (const [info, value] of Object.entries(deliveryInfo)){
            if(value === '' || info === '') return handleCheckout('valid', true)
        }
        return handleCheckout('valid', false)
    }, [deliveryInfo])


    return(
        
        <div>        
            <div>
                <div className="overflow-x-auto ">
                    <table className="table w-full">
                        <thead>
                            <tr>
                                <th>
                                <label>
                                    <input id='checkedAll' onChange={e => handleSCChange(e)} type="checkbox" className="checkbox" /> 
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
                    userCart.map((cartItem: any, idx: number) => <ShoppingItem key={idx} cartItem={cartItem} handleSCChange={handleSCChange} />)
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

                <DeliveryForm deliveryInfo={deliveryInfo} handleDeliveryInfo={handleDeliveryInfo} />

                <div className="justify-end space-x-2 card-actions gap-4">
                        <button id='drop' onClick={handleSCChange} className="btn btn-error" >Delete</button>
                        <button id='drop' disabled={(Boolean(userCart.length < 1) || valid)} onClick={() => handleCheckout('checkout', true)} className="btn btn-success" >Checkout</button>
                </div>

            </div>         
        </div>
    )

}

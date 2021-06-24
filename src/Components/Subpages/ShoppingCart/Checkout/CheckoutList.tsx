import * as React from 'react'
import { CheckoutItem } from './CheckoutItem'
import { CheckoutInfo } from './CheckoutInfo'
import { SuccessPage } from './SuccessPage'

interface ICheckOutListProps {
    userCart: any;
    reducer(accumulator: any, currentObject: any) : number;
    handleChange(e: object): void;
    ordered: Boolean;
    username: string; 
    handleOrder(): void; 
    handleCheckout(name: string, bool: boolean) : void;
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
}

export const CheckoutList: React.FC<ICheckOutListProps> = ({ userCart, reducer, handleOrder, ordered, username, handleChange, handleCheckout, deliveryInfo }) : JSX.Element => {
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
                {userCart.map((cartItem: any, idx: number) => <CheckoutItem key={idx} itemprice={cartItem.itemprice} attemptquantity={cartItem.attemptquantity} itemdescription={cartItem.itemdescription} />)}
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
            <SuccessPage username={username} handleChange={handleChange} handleCheckout={handleCheckout} />
            }
        </div>
    )

}

import React from 'react'
import { CheckoutList } from './Checkout/CheckoutList';
import { CartContent } from './CartContent';
import { SuccessPage } from './Checkout/SuccessPage';
import { ShoppingCartNavigation } from './ShoppingCartNavigation';

export const ShoppingCart = ({ userCart, handleSCChange, handleOrder, ordered, username, handleChange, handleDeliveryInfo, deliveryInfo }) => {

    const reducer = (accumulator, currentObject) => accumulator + (currentObject.attemptQuantity * currentObject.itemPrice);
    const [checkout, setCheckout] = React.useState(false);

    return(

        <div>
            <ShoppingCartNavigation ordered={ordered} checkout={checkout} />
            { !ordered ?
                !checkout ?
                    <CartContent reducer={reducer} setCheckout={setCheckout} handleSCChange={handleSCChange} userCart={userCart} handleDeliveryInfo={handleDeliveryInfo} />
                    :
                    <CheckoutList userCart={userCart} reducer={reducer} handleOrder={handleOrder} ordered={ordered} username={username} handleChange={handleChange} setCheckout={setCheckout} deliveryInfo={deliveryInfo} />
                :
                <SuccessPage username={username} handleChange={handleChange} setCheckout={setCheckout} />
            }
                
        </div>
    )

}

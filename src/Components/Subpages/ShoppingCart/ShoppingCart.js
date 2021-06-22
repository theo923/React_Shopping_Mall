import React, { useState } from 'react'
import { CheckoutList } from './Checkout/CheckoutList';
import { CartContent } from './CartContent';
import { SuccessPage } from './Checkout/SuccessPage';
import { ShoppingCartNavigation } from './ShoppingCartNavigation';

const ShoppingCart = (props) => {
    const reducer = (accumulator, currentObject) => accumulator + (currentObject.attemptquantity * currentObject.itemprice);
    const [checkout, setCheckout] = useState(false);
    const { userCart, handleSCChange, handleOrder, ordered, username, handleChange, handleDeliveryInfo, deliveryInfo } = props.props

    return(

        <div>
            <ShoppingCartNavigation ordered={ordered} checkout={checkout} />
            { !ordered ?
                !checkout ?
                    <CartContent    reducer={reducer} 
                                    setCheckout={setCheckout} 
                                    handleSCChange={handleSCChange}
                                    userCart={userCart} 
                                    handleDeliveryInfo={handleDeliveryInfo}
                                    deliveryInfo={deliveryInfo} />
                    :
                    <CheckoutList   userCart={userCart} 
                                    reducer={reducer} 
                                    handleOrder={handleOrder} 
                                    ordered={ordered} 
                                    username={username} 
                                    handleChange={handleChange}
                                    setCheckout={setCheckout} 
                                    deliveryInfo={deliveryInfo} />
                :
                <SuccessPage username={username} handleChange={handleChange} setCheckout={setCheckout} />
            }
                
        </div>
    )

}

export default ShoppingCart
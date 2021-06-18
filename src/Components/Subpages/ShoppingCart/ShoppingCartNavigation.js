import React from 'react'

export const ShoppingCartNavigation = ({ ordered, checkout }) => {
    const validateStep = status => {
        return status ? 'step-info' : ''
    }

    return(
        <div>
            <ul className="steps w-full">
                <li className={`step step-info`} >Shopping Cart</li> 
                <li className={`step ${validateStep(checkout)}`}>Checkout</li> 
                <li className={`step ${validateStep(ordered)}`}>Order</li>
            </ul>
        </div>
    )

}

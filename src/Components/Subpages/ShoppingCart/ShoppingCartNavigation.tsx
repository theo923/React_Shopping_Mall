import * as React from 'react'

type Props = {
    ordered: boolean;
    checkout: boolean;
}

export const ShoppingCartNavigation = ({ ordered, checkout }: Props) : JSX.Element => {
    const validateStep = (status: boolean) : string => {
        return status ? 'step-info' : ''
    }

    return(
        <div>
            <ul className="steps w-full">
                <li className={`step step-info`} >Shopping Cart</li> 
                <li className={`step ${validateStep(checkout) || validateStep(ordered)}`}>Checkout</li> 
                <li className={`step ${validateStep(ordered)}`}>Order</li>
            </ul>
        </div>
    )

}

import * as React from 'react'
import { CheckoutList } from './Checkout/CheckoutList';
import { CartContent } from './CartContent';
import { SuccessPage } from './Checkout/SuccessPage';
import { ShoppingCartNavigation } from './ShoppingCartNavigation';

interface IState {
    checkout: boolean;
    valid: boolean;
}


class ShoppingCart extends React.Component <any, IState> {
    constructor(props: any){
        super(props)
        this.state = {
            checkout: false,
            valid: false
        }
    }
    protected reducer = (accumulator: any, currentObject: any) : number => accumulator + (currentObject.attemptquantity * currentObject.itemprice);

    protected handleCheckout = (name: string, bool: boolean) : void => {
        name === 'valid' ? this.setState({valid: bool}) : this.setState({checkout: bool})
    }

    render() : JSX.Element {
        const { userCart, handleSCChange, handleOrder, ordered, username, handleChange, handleDeliveryInfo, deliveryInfo } = this.props.props

        return(

            <div>
                <ShoppingCartNavigation ordered={ordered} checkout={this.state.checkout} />
                { !ordered ?
                    !this.state.checkout ?
                        <CartContent    reducer={this.reducer} 
                                        handleCheckout={this.handleCheckout} 
                                        handleSCChange={handleSCChange}
                                        userCart={userCart} 
                                        handleDeliveryInfo={handleDeliveryInfo}
                                        deliveryInfo={deliveryInfo} 
                                        valid={this.state.valid} />
                        :
                        <CheckoutList   userCart={userCart} 
                                        reducer={this.reducer} 
                                        handleOrder={handleOrder} 
                                        ordered={ordered} 
                                        username={username} 
                                        handleChange={handleChange}
                                        handleCheckout={this.handleCheckout} 
                                        deliveryInfo={deliveryInfo} />
                    :
                    <SuccessPage username={username} handleChange={handleChange} handleCheckout={this.handleCheckout} />
                }
                    
            </div>
        )
    }


}

export default ShoppingCart
import * as React from 'react'
import { Navigation } from './Navigation'
import { Content } from './Content'
import { ICartItem } from '../App'

type Props = {
    handleChange: any;
    username: string ;
    page: string;
    handleSCChange: any;
    userCart: Array<ICartItem>;
    handleOrder: any;
    ordered: boolean;
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
    handleDeliveryInfo: any;
}

export const UserUI = (props: Props) : JSX.Element => {
    return(
        <div className="flex justify-center min-h-screen bg-base-100 text-white">
            <div className='container p-4 lg:m-36 bg-base-200 rounded-box shadow-lg'>
                <Navigation handleChange={props.handleChange} />
                <Content props={props} />
            </div>
        </div>
    )
}
import React from 'react'
import { Navigation } from './Navigation'
import { Content } from './Content'

export const UserUI = ({handleChange, username, page, handleSCChange, userCart, handleOrder, ordered, handleDeliveryInfo, deliveryInfo, userList}) => {
    return(
        <div className="flex justify-center min-h-screen bg-base-100 text-white">
            <div className='container p-4 lg:m-36 bg-base-200 rounded-box shadow-lg'>
                <Navigation handleChange={handleChange} page={page}/>
                <Content 
                    handleChange={handleChange} 
                    username={username} 
                    page={page} 
                    handleSCChange={handleSCChange} 
                    userCart={userCart}
                    handleOrder={handleOrder}
                    ordered={ordered}
                    deliveryInfo={deliveryInfo}
                    handleDeliveryInfo={handleDeliveryInfo}
                    userList={userList}
                />
            </div>
        </div>
    )
}
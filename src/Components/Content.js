import React from 'react'
import { Contact } from './Subpages/Contact'
import { ShoppingCart } from './Subpages/ShoppingCart/ShoppingCart'
import { News } from './Subpages/News/News'
import { Tracking } from './Subpages/Tracking/Tracking'

export const Content = ({handleChange, username, page, handleSCChange, userCart, handleOrder, ordered, handleDeliveryInfo, deliveryInfo, userList}) => {

    const SwitchPages = page => {
        switch(page) {
            case 'contact':         return <Contact />
            case 'shoppingCart':    return <ShoppingCart userCart={userCart} handleSCChange={handleSCChange} handleOrder={handleOrder} handleChange={handleChange} ordered={ordered} username={username} handleDeliveryInfo={handleDeliveryInfo} deliveryInfo={deliveryInfo} />
            case 'news':            return <News handleSCChange={handleSCChange} />
            case 'tracking':        return <Tracking username={username} userList={userList} />
            default: console.log('SwitchPages: Something went wrong!!!')
        }
    }

    return(
            <div className='m-12'>
                {SwitchPages(page)}
            </div>
    )
}

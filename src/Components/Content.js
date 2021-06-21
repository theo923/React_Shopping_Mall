import React from 'react'
import { Contact } from './Subpages/Contact'
import { ShoppingCart } from './Subpages/ShoppingCart/ShoppingCart'
import { News } from './Subpages/News/News'
import { Tracking } from './Subpages/Tracking/Tracking'

export const Content = (props) => {
    props = props.props
    const SwitchPages = page => {
        switch(page) {
            case 'contact':         return <Contact />
            case 'shoppingCart':    return <ShoppingCart props={props}/>
            case 'news':            return <News handleSCChange={props.handleSCChange} />
            case 'tracking':        return <Tracking username={props.username} />
            default: console.log('SwitchPages: Something went wrong!!!')
        }
    }

    return(
            <div className='m-12'>
                {SwitchPages(props.page)}
            </div>
    )
}

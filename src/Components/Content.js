import React , { Suspense, lazy } from 'react'

const Contact = lazy(() => import('./Subpages/Contact'))  
const ShoppingCart = lazy(() => import('./Subpages/ShoppingCart/ShoppingCart'))
const News = lazy(() => import('./Subpages/News/News'))
const Tracking = lazy(() => import('./Subpages/Tracking/Tracking'))

export const Content = (props) => {
    props = props.props
    const SwitchPages = page => {
        switch(page) {
            case 'contact':         return  <Suspense fallback={<div>Loading...</div>}><Contact /></Suspense>
            case 'shoppingCart':    return  <Suspense fallback={<div>Loading...</div>}><ShoppingCart props={props}/></Suspense>
            case 'news':            return  <Suspense fallback={<div>Loading...</div>}><News handleSCChange={props.handleSCChange} /></Suspense>
            case 'tracking':        return  <Suspense fallback={<div>Loading...</div>}><Tracking username={props.username} /></Suspense>
            default: console.log('SwitchPages: Something went wrong!!!')
        }
    }

    return(
            <div className='m-12'>
                {SwitchPages(props.page)}
            </div>
    )
}

import * as React from 'react'

const Contact = React.lazy(() => import('./Subpages/Contact'))  
const ShoppingCart = React.lazy(() => import('./Subpages/ShoppingCart/ShoppingCart'))
const News = React.lazy(() => import('./Subpages/News/News'))
const Tracking = React.lazy(() => import('./Subpages/Tracking/Tracking'))

export const Content = (props: any) : JSX.Element => {
    props = props.props;
    const SwitchPages = (page: string) : JSX.Element => {
        switch(page) {
            case 'contact':         return  <React.Suspense fallback={<div className='text-4xl'>Loading...</div>}><Contact /></React.Suspense>
            case 'shoppingCart':    return  <React.Suspense fallback={<div className='text-4xl'>Loading...</div>}><ShoppingCart props={props}/></React.Suspense>
            case 'news':            return  <React.Suspense fallback={<div className='text-4xl'>Loading...</div>}><News handleSCChange={props.handleSCChange} /></React.Suspense>
            case 'tracking':        return  <React.Suspense fallback={<div className='text-4xl'>Loading...</div>}><Tracking username={props.username} /></React.Suspense>
            default:                console.log('SwitchPages: Something went wrong!!!')
                                    return <div className='text-7xl'>Service Stop Working...</div>
        }
        
    }

    return(
            <div className='m-12'>
                {SwitchPages(props.page)}
            </div>
    )
}

import React from 'react'
import { Navigation } from './Navigation'
import { Content } from './Content'

export const UserUI = (props) => {
    return(
        <div className="flex justify-center min-h-screen bg-base-100 text-white">
            <div className='container p-4 lg:m-36 bg-base-200 rounded-box shadow-lg'>
                <Navigation handleChange={props.handleChange} page={props.page} />
                <Content props={props} />
            </div>
        </div>
    )
}
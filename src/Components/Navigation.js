import React from 'react'

export const Navigation = ({handleChange, username, page}) => {
    return(
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-none px-2 mx-2">
                    <span className="text-lg font-bold">
                        Shop's Name
                    </span>
            </div> 
            <div className="flex-1 px-2 mx-2">
                <div className="items-stretch flex">
                <button name='page' value='news' className="btn btn-ghost btn-sm rounded-btn" onClick={handleChange}>
                        News
                        </button> 
                <button name='page' value='shoppingCart' className="btn btn-ghost btn-sm rounded-btn" onClick={handleChange}>
                        Shopping Cart
                        </button> 
                <button name='page' value='tracking' className="btn btn-ghost btn-sm rounded-btn" onClick={handleChange}>
                        Tracking
                        </button> 
                <button name='page' value='contact' className="btn btn-ghost btn-sm rounded-btn" onClick={handleChange}>
                        Contact us
                        </button>
                </div>
            </div> 
        </div>
    )
}
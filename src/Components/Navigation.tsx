import * as React from 'react'

interface IHandleChange {
    handleChange(e: object): React.FunctionComponent;
}

export const Navigation = ({ handleChange } : IHandleChange) : JSX.Element => {
    return(
        <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content rounded-box">
            <div className="flex-1 px-0 mx-0 lg:px-2 lg:mx-2 ">
                <div className="items-stretch flex">
                <button name='page' value='news' className="btn btn-ghost btn-sm rounded-btn" onClick={e => handleChange(e)}>
                        News
                        </button> 
                <button name='page' value='shoppingCart' className="btn btn-ghost btn-sm rounded-btn" onClick={e => handleChange(e)}>
                        ShoppinCart
                        </button> 
                <button name='page' value='tracking' className="btn btn-ghost btn-sm rounded-btn" onClick={e => handleChange(e)}>
                        Tracking
                        </button> 
                <button name='page' value='contact' className="btn btn-ghost btn-sm rounded-btn" onClick={e => handleChange(e)}>
                        Contact
                        </button>
                </div>
            </div> 
            <div className="flex-none">
                    <button name="logout" value='logout' className="btn btn-sm rounded-btn btn-ghost" onClick={e => handleChange(e)}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current text-error">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                </div>
        </div>
    )
}
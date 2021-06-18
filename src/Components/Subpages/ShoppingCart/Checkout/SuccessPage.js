import React from 'react'

export const SuccessPage = ({ username, handleChange, setCheckout }) => {

    return(
        <div>
            <br/><br/><br/><br/><br/><br/>
            <div className='flex flex-col justify-items-center items-center gap-5'>        
                <div className="text-3xl md:text-4xl lg:text-5xl" >Congratulations user {username}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl" >You have ordered successfully!!</div>     
            </div>
            <div className=' justify-center space-x-2 card-actions gap-4'>           
                <button name='page' value='tracking' className="btn btn-secondary" onClick={handleChange} >view my order </button> 
                <button name='re-order' className="btn btn-accent" onClick={e => {setCheckout(false); handleChange(e)}} >order again</button> 
            </div>

        </div>

    )

}

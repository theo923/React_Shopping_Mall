import * as React from 'react'

type SuccessPageProps = {
    username: string;
    handleChange(e: object): void;
    handleCheckout(name: string, bool: boolean) : void;
} 

export const SuccessPage = ({ username, handleChange, handleCheckout }: SuccessPageProps) : JSX.Element => {
    return(
        <div>
            <br/><br/><br/><br/><br/><br/>
            <div className='flex flex-col justify-items-center items-center gap-5'>        
                <div className="text-3xl md:text-4xl lg:text-5xl" >Congratulations user {username}</div>
                <div className="text-3xl md:text-4xl lg:text-5xl" >You have ordered successfully!!</div>     
            </div>
            <div className=' justify-center space-x-2 card-actions gap-4'>           
                <button name='page' value='tracking' className="btn btn-secondary" onClick={e => handleChange(e)} >view my order </button> 
                <button name='re-order' className="btn btn-accent" onClick={e => {handleCheckout('checkout', false); handleChange(e)}} >order again</button> 
            </div>
        </div>
    )
}
